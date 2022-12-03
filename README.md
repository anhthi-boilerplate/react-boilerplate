# Setting up a React project using Webpack and Typescript

This is the step-by-step hands-on to setup a complete React app from scratch with scalable structure and modern utilities. We will discover how to combine all pieces of stuff to convert from typescript code to ES5 which can be understood from browser

## 🌄 Init Project

Create the project structure and generate the package.json by command

    npm init -y

## 🌄 React

Install dependencies

    npm i react react-dom
    npm i @types/react @types/react-dom -D

## 🌄 Typescript

Install dependencies

    npm i typescript -D

Generate tsconfig.json

    npx tsc --init

## 🌄 Babel

Install dependencies

    npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-loader -D
    npm i @babel/runtime

We also need the .babelrc for babel configuration at the root dir

    {
      "presets": [
        "@babel/preset-env",
        [
          "@babel/preset-react",
          {
            "runtime": "automatic"
          }
        ],
        "@babel/preset-typescript"
      ],
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "regenerator": true
          }
        ],
      ]
    }

## 🌄 Webpack

Install dependencies

    npm i webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin -D

Create webpack.base.js to setup Webpack

Adding html-webpack-plugin to the webpack plugins

Adding the start script to package.json file

    "start": "webpack serve --config webpack/webpack.dev.js"

## 🌄 Styled-Components

Install dependencies

    npm i babel-plugin-styled-components @types/styled-components -D
    npm i styled-components

Add `babel-plugin-styled-components` to Babel plugin config

    "plugins": ["babel-plugin-styled-components"]

## 🌄 Handling Images

Resolve the type checking for images by adding `declare module "*.png"` to typings/global.d.ts file

Add a rule to webpack.base.js

## 🌄 Handling SVG

Install dependencies

    npm i @svgr/webpack -D

Resolve the type checking for images by adding `declare module "*.svg"` to typings/global.d.ts file
Add a new rule to webpack.base.js

## 🌄 ESLint

Install dependencies

    npm i eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-jsx-a11y -D
    npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

Adding the .eslintrc with the config as in repo
Adding the lint script to package.json

    "lint": "eslint src --ext .ts,.tsx,.js --fix"

## 🌄 Prettier

Install dependencies

    npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Adding the .prettier at the root dir with the config as in repo
Update the eslint extends with

    "extends": ["prettier", "plugin:prettier/recommend"]

The final step is adding the format script to package.json

## 🌄 Lint-Staged and Husky

Install dependencies

    npm i lint-staged husky -D

Adding the lint-staged to package.json
Initialize the husky by command

    npx husky-init && npm install

## 🌄 Copy Webpack Plugin

Install dependencies

    npm i copy-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 Clean Webpack Plugin

Install dependencies

    npm i clean-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 Bundle Stats Webpack Plugin

Install dependencies

    npm i bundle-stats-webpack-plugin -D

Add new plugin to webpack.base.js

## 🌄 DotEnv

Install dependencies

    npm i dotenv-webpack -D

Add new plugin to webpack.dev.js and webpack.prod.js

## 🌄 Resolve Absolute Paths

Install dependencies

    npm i babel-plugin-module-resolver -D

Add module resolve to babel plugins

    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [".ts", ".tsx", ".js"]
      }
    ],

Create jsconfig.json

    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "paths": {
          "*": ["src/*"]
        }
      }
    }

## 🌄 Commit Lint

Install dependencies

    npm i @commitlint/config-conventional @commitlint/cli -D

Adding .commitlintrc

Adding hook

    npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
