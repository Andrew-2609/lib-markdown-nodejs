# My first NodeJS Library - Lib Markdown

This lib was created throughout one of [Alura](https://www.alura.com.br)'s courses of [NodeJS](https://nodejs.org/en/).

It is very simple and made for study purposes, but feel free to try it out!

See it also on [npm](https://www.npmjs.com/package/lib-markdown-nc)!

## What does it do?

It reads a **markdown** file and searches for [hyperlinks](https://en.wikipedia.org/wiki/Hyperlink) in it,
using [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression) to do the trick.

For instance, if you have in your markdown file a hyperlink pointing
to [https://german-gender-api.deta.dev](https://german-gender-api.deta.dev/), it will show you the following response
in your terminal:

```bat
npm run cli ./arquivos/texto1.md

   Lista de links:
   [ { 'German Gender API': 'https://german-gender-api.deta.dev/' } ]
```

It includes a title, "Lista de links" (_List of links_) and an array of each hyperlink and its title inside the markdown file.

## How do I run it?

It's simple: simply type 'npm run cli' in your terminal, and pass the following arguments:

1. File path, e.g., ``./arquivos/texto1.md``
2. **validar** (optional)

As to the second argument, if you want to, you can also **validate** each link of the read file by adding it.

If you do so, it'll show you the hyperlinks in the file, as well as the **status code** of **requests made on them**.

```bat
npm run cli ./arquivos/texto1.md

   Links validados: 
   [
     {
       'German Gender API': 'https://german-gender-api.deta.dev/',
       status: '200 - OK'
     }
   ]   
```

## Project Dependencies and Structure

* _node-fetch_ (to make the requests)
* _chalk_ (to color the terminal output)

```bash
├── cli.js
├── examples
│   ├── index.js
│   └── percorrendo-diretorios.js
├── http-validacao.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── test
    └── index.test.js
```

### What about this 'examples' folder?

It contains some tests related to my studies of JavaScript and NodeJS. Since this is not a _serious_ library, I'll keep them there ^~^.