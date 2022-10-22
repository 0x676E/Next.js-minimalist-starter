NextJS minimalist starter
======
This repository aims to delivery a starter in NextJS with the main configurations and libraries, following the best pratices and patterns.

## Requirements
* Node.js
* npm or yarn

## How do I use it?
To run the project follow the next steps:

```
git clone --depth=1 https://github.com/0xHz/NextJS-minimalist-starter.git project-name
cd project-name
```

*Using NPM:*
```
npm i
npm run dev
```
*Using YARN:*
```
yarn install
yarn dev
```
Open your browser and enter http://localhost:3000 to see your project.

## How do I test it?
To perform tests and update test snapshots, follow the nexts steps:

**Perform all tests:**
*Using NPM:*
```
npm test
```
*Using YARN*
```
yarn test
```

**Update snapshots:**
*Using NPM:*
```
npm test:update
```
*Using YARN*
```
yarn test:update
```

## Technologies and tools
The most wanted technologies and tools:

* [NextJS](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Sass](https://sass-lang.com/)
* [Docker](https://www.docker.com/)
* [Jest](https://jestjs.io/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://typicode.github.io/husky/)
* [PostCSS](https://postcss.org/)

## File structure
```
Nextjs-minimalist-starter
│
└───📂.husky
│      📜.gitignore
│      📜commit-msg
│      📜pre-commit
│
└───📂__tests__
│    └───📂Home
│        │   📂__snapshots__
│        │       📜Home.test.tsx.snap
│        │        
│        📜Home.test     
│        
└───📂components
│   └───📂Layout
│        └───📂__tests__
│        │       📂__snapshots__
│        │       │   📜Layout.test.tsx.snap
│        │       │
│        │       📜Layout.test.tsx
│        │       
│        📜index.tsx
│        📜Layout.tsx
│    
└───📂pages
│   └───📂api  
│   │       📜api.ts
│   │      
│   └───📂Home
│   │       📜Home.tsx
│   │    
│   📜_app.tsx
│   📜index.tsx
│        
└───📂config
│       📜appsettings.json
│       📜settings.ts
│       📜types.ts
│    
└───📂public
│       📜favicon.ico
│    
└───📂styles
│   └───📂variables
│   │      📜_colors.scss
│   │
│   📜main.scss   
│    
└───📂types
│       📜childrenType.d.d.ts
│    
└───📜.babelrc
└───📜.dockerignore
└───📜Dockerfile
└───📜.env
└───📜.eslintrc.json
└───📜.lintstagedrc
└───📜.prettierignore
└───📜.prettierrc.json
└───📜commitlint.config.js
└───📜jest.config.js
└───📜jest.setup.js
└───📜next.config.js
└───📜.gitignore
└───📜package.json
└───📜postcss.config.js
└───📜README.md
└───📜tailwind.config.js
└───📜tsconfig.json