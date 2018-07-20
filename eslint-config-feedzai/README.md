# eslint-config-feedzai

[![Build Status](https://travis-ci.com/feedzai/eslint-config-feedzai.svg?branch=master)](https://travis-ci.com/feedzai/eslint-config-feedzai)

This configuration contains our ESLint rules, including the ones for ECMAScript 6+. 
This packages requires `eslint` and `eslint-plugin-import`.

## Usage

### Installing package dependencies

In order to list the correct versions of each package you could use this command:

```shell
npm info "@feedzai/eslint-config-feedzai@latest" peerDependencies
```

After this command, you can install those packages manually or if you're using the **npm version > 5** you could use this shortcut:

```shell
npx install-peerdeps --dev @feedzai/eslint-config-feedzai
```

If you want to do all manually you should use:

```shell
npm install --save-dev @feedzai/eslint-config-feedzai eslint@^#.#.# eslint-plugin-import@^#.#.#
```

### Using Feedzai's ESLint configurations in your `.eslintrc` file

Add `"extends": "@feedzai/eslint-config-feedzai"`.

## Development tasks

You can check if this packages follow our coding style conventions by using `npm run lint`.

## Deployment tasks

The available commands are:

- `deploy:major` - creates a git tag and publish the X.0.0 version. _This command should be executed only in the `master` branch._
- `deploy:minor` - creates a git tag and publish the X.Y.0 version. _This command should be executed in the hot-fix branches (`hf-X.x.x`)._
- `deploy:patch` - creates a git tag and publish the X.Y.Z version. _This command should be executed in the hot-fix branches (`hf-X.x.x`)._
