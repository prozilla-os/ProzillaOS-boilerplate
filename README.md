<div align="center">
  <br />
  <p>
    <a href="https://os.prozilla.dev/"><img src="https://os.prozilla.dev/assets/logo.svg" height="200" alt="ProzillaOS" /></a>
  </p>
  <p>
    <a href="https://github.com/prozilla-os/ProzillaOS"><img alt="Stars" src="https://img.shields.io/github/stars/prozilla-os/ProzillaOS-boilerplate?style=flat-square&color=FED24C&label=%E2%AD%90"></a>
    <a href="https://github.com/prozilla-os/ProzillaOS"><img alt="Forks" src="https://img.shields.io/github/forks/prozilla-os/ProzillaOS-boilerplate?style=flat-square&color=4D9CFF&label=Forks&logo=github"></a>
    <a href="https://www.npmjs.com/package/prozilla-os"><img alt="NPM Version" src="https://img.shields.io/npm/v/prozilla-os?logo=npm&style=flat-square&label=prozilla-os&color=FF4D5B"></a>
  </p>
</div>

# ProzillaOS boilerplate

This project contains boilerplate code for working with the [`prozilla-os`][github] library. It uses React, Vite and TypeScript.

## Getting started

Requirements: **Node.js**

```sh
$ git clone https://github.com/prozilla-os/ProzillaOS-boilerplate.git prozilla-os
$ cd ./prozilla-os
$ npm install
$ npm run dev
```

Your website will be available at [localhost:3000][localhost].

## Project structure

This is an overview of the most important files and folders in this project.

```
.
├── /public  ———————————  Static assets (favicons, images, fonts, ...)
│
├── /src
│   ├── /components  ———————  React components
│   │   └── App.tsx  ———————————  App component that renders the ProzillaOS component with optional configs
│   ├── /config  ———————————  Config files for ProzillaOS
│   ├── /styles  ———————————  Stylesheets
│   │   └── index.css  —————————  Global stylesheet
│   ├── /types  ————————————  TypeScript types
│   └── index.tsx  —————————  Main entry point that renders the app
│
├── eslint.config.js  ——  Linting configurations
├── index.html  ————————  HTML file containing metadata and a link to the main script
├── package.json  ——————  Project metadata and dependencies
├── README.md  —————————  You are here
├── tsconfig.json  —————  TypeScript configurations
└── vite.config.ts  ————  Vite configurations
```

## Scripts

- `npm run dev` - Starts the Vite development server at [localhost:3000][localhost].
- `npm run build` - Compiles the project using TypeScript and bundles all files into the `dist` folder.
- `npm run lint` - Runs a linter on all .ts and .tsx files.
- `npm run preview` - Previews the build in the `dist` folder on a local web server at [localhost:3000][localhost].

## Links

- [Website/demo][website]
- [GitHub][github]
- [npm][npm]
- [Ko-fi][ko-fi]

[website]: https://os.prozilla.dev/
[github]: https://github.com/prozilla-os/ProzillaOS/tree/convert-to-monorepo/packages/prozilla-os
[npm]: https://www.npmjs.com/package/prozilla-os
[ko-fi]: https://ko-fi.com/prozilla
[localhost]: http://localhost:3000/