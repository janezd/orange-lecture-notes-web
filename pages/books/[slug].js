import fs from "fs";
import path from "path";
import React from "react";
import matter from "gray-matter";
import Image from "../../components/Image";
import { ImShrink2, ImEnlarge2 } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";
import { isAllowedPath, parseMd } from "../../utils/helpers";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getImageSize } from "../../utils/getImageSize";
import slugify from 'slugify';

export async function getStaticPaths() {
  const booksPath = path.join("public", "books" + path.sep);

  const paths = fs
    .readdirSync(booksPath)
    .filter(isAllowedPath)
    .filter((slug) => fs.existsSync(path.join(booksPath, slug, "index.md")))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`public/books/${slug}/index.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const mdxSource = await serialize(parseMd(content, `/books/${slug}`), {
    mdxOptions: {
      rehypePlugins: [rehypeKatex, getImageSize],
    },
  });

  const chapters = [];

  (frontmatter.chapters || []).forEach(async (slug) => {
    let fileName;

    try {
      fileName = fs.readFileSync(`public/chapters/${slug}/index.md`, "utf-8");
    } catch (err) {
      return;
    }

    const { data: frontmatter, content } = matter(fileName);
    const mdxSource = await serialize(parseMd(content, `/chapters/${slug}`), {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, getImageSize],
      },
    });

    chapters.push({
      frontmatter,
      content: mdxSource,
    });
  });

  return {
    props: {
      frontmatter,
      content: mdxSource,
      chapters,
      slug,
    },
  };
}

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = React.useRef();

  React.useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.current.observe(ref.current);
    return () => {
      observer.current.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}

const Chapter = ({ frontmatter, content, index, setIsChapterIndexVisible }) => {
  const ref = React.useRef();
  const isVisible = useOnScreen(ref);

  React.useEffect(() => {
    setIsChapterIndexVisible((val) => ({ ...val, ...{ [index]: isVisible } }));
  }, [isVisible, setIsChapterIndexVisible, index]);

  return (
    <div ref={ref} className="flex-container">
      <div className="right-column">
        <div className="prose mx-auto mt-8 chapter">
          <h2 className="chapter-title" id={slugify(frontmatter.title)}>
            Chapter {index + 1}: {frontmatter.title}
          </h2>
          <MDXRemote {...content} />
        </div>
      </div>
    </div>
  );
};

const ContentIndex = ({ chapters, isChapterIndexVisible }) => {
  const [small, setSmall] = useState(false);

  const highestVisibleIndex = React.useMemo(() => {
    const highestIndex = 0;

    Object.keys(isChapterIndexVisible).forEach((k) => {
      if (isChapterIndexVisible[k] && k > highestIndex) {
        highestIndex = k;
      }
    });

    return parseInt(highestIndex);
  }, [isChapterIndexVisible]);

  return (
    <div className={small ? "small content-index" : "content-index"}>
      <div className="toolbar">
        <button className="icon-button" onClick={() => setSmall(!small)}>
          {small ? <ImEnlarge2 /> : <ImShrink2 />}
        </button>
      </div>

      <h2>Chapters</h2>

      <ul>
        {chapters.map(({ frontmatter }, index) => (
          <li key={index}>
            <Link href={"#" + slugify(frontmatter.title)}>
              <a className={highestVisibleIndex === index ? "active" : ""}>
                {frontmatter.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function PostPage({ frontmatter, content, chapters, slug }) {
  const [isChapterIndexVisible, setIsChapterIndexVisible] = useState({});

  let relativePath = `/books/${slug}`;

  return (
    <div className="prose mx-auto book">
      {frontmatter.coverImg && (
        <div className="book-cover-img">
          <Image
            width={650}
            height={650}
            layout={"responsive"}
            alt={"cover image"}
            src={`${relativePath}/${frontmatter.coverImg}`}
          />
        </div>
      )}

      <h1 className="max-w-sm mb-0 font-medium">{frontmatter.title}</h1>
      <p className="subtitle">{frontmatter.subTitle}</p>

      <MDXRemote {...content} />

      <ContentIndex
        chapters={chapters}
        isChapterIndexVisible={isChapterIndexVisible}
      />

      {chapters.map(({ frontmatter, content }, index) => (
        <Chapter
          key={frontmatter.title}
          frontmatter={frontmatter}
          content={content}
          index={index}
          setIsChapterIndexVisible={setIsChapterIndexVisible}
        />
      ))}
    </div>
  );
}
