# eslint-config-feedzai

[![Build Status](https://travis-ci.com/feedzai/eslint-config-feedzai.svg?branch=master)](https://travis-ci.com/feedzai/eslint-config-feedzai)

This repository contains the ESLint configuration used across products at Feedzai.
We share this configuration to promote the use of linters in JavaScript and to share our conventions and best practices in the hope of inspiring others when defining their configurations.

This repo includes two distinct ESLint configurations:

- `eslint-config-feedzai`- This configuration contains our ESLint rules, including the ones for ECMAScript 6+. 
If you're using React in your projects please check the `eslint-config-feedzai-react`.
This packages requires `eslint` and `eslint-plugin-import`.

- `eslint-config-feedzai-react` - This configuration extends the `eslint-config-feedzai` and includes the rules for React, a11y and Jest.
This package requires `eslint`, `eslint-config-feedzai`, `eslint-plugin-import`, `eslint-plugin-jest`, `eslint-plugin-jsx-a11y` and  `eslint-plugin-react`.

## Usage

### Installing package dependencies

In order to list the correct versions of each package you could use this command:

```shell
npm info "eslint-config-feedzai@latest" peerDependencies
```

After this command, you can install those packages manually or if you're using the **npm version > 5** you could use this shortcut:

```shell
npx install-peerdeps --dev eslint-config-feedzai-react
```

If you want to do all manually you should use:

```shell
npm install --save-dev eslint-config-feedzai eslint@^#.#.# eslint-plugin-import@^#.#.#
```

or :

```shell
npm install --save-dev eslint-config-feedzai-react eslint@^#.#.# eslint-config-feedzai@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-jest@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-react@^#.#.#
```

### Using Feedzai's ESLint configurations in your `.eslintrc` file

Add `"extends": "feedzai"` for JavaScript projects or `"extends": "feedzai-react"` for React projects to your `.eslintrc` file.

## Development tasks

You can check if those packages follow our coding style conventions by using `npm run lint` in the root folder of each package.

## Deployment tasks

The available commands are:

- `deploy:major` - creates a git tag and publish the X.0.0 version. _This command should be executed only in the `master` branch._
- `deploy:minor` - creates a git tag and publish the X.Y.0 version. _This command should be executed in the hot-fix branches (`hf-X.x.x`)._
- `deploy:patch` - creates a git tag and publish the X.Y.Z version. _This command should be executed in the hot-fix branches (`hf-X.x.x`)._
