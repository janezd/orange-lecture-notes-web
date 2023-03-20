# Documentation generator

Preview: [Orange Lecture Notes Site](https://books.biolab.si/)

## Getting Started

Start by installing Node.JS and yarn. On Mac, run:

```bash
brew install node
npm install --global yarn
```

Then, run the development server from directory with books:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

Md Content is stored in the public folder.

Folder structure:

    .
    ├── books
        ├── book1
            ├── index.md
            ├── img1.png
            ├── img2.png
        ├── book2
            ├── index.md
    ├── chapters
        ├── chapter1
            ├── index.md
            ├── img1.png
            ├── img2.png
        ├── chapter2
            ├── index.md
        ├── chapter3
            ├── index.md

When defining a book you can include a list of chapters in the book's front matter. Chapter names must match folder names in the chapters folder:
```
---
title: 'Single-Cell Gene Expression Analysis'
subTitle: 'Working notes for the course on Functional Genomics and Proteomics, University of Ljubljana'
coverImg: '/orange.png'
date: 'May 2022'
chapters:
  - classification
  - regression
---
```

***We recommend using the script for creating new books/chapters. Running the following script will create folders and an boilerplate index.md file.***
To create a new book or chapter run following command:

New book:
```
npm run new:book -- <book-name-use-dash-case>
```

New new chapter:
```
npm run new:chapter -- <chapter-use-dash-case>
```

### Chapters formatting and images

See /public/chapters/boilerplate.md for documentation and examples.

You can try the md editor to see results in real time.
`https://nextjs-md-documentation.vercel.app/editor`
or
`<localhost>/editor`
