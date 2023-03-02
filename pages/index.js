import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { isAllowedPath } from "../utils/helpers";

export async function getStaticProps() {
  const booksPath = path.join("public", "books" + path.sep);

  const posts = fs
    .readdirSync(booksPath)
    .filter(isAllowedPath)
    .filter((slug) => fs.existsSync(path.join(booksPath, slug, "index.md")))
    .map((slug) => {
      const readFile = fs.readFileSync(
        `public/books/${slug}/index.md`,
        "utf-8"
      );
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    })
    .filter(({ frontmatter }) => frontmatter.public);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="home">
      <h1>Lecture notes</h1>

      {posts.map(({ slug, frontmatter }) => (
        <div className="book" key={slug}>
          <Link href={`/books/${slug}`}>
            <a>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.subTitle}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
