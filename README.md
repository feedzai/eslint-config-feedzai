# eslint-config-feedzai

This package provides the ESLint configuration that we use at Feedzai in order check our code conventions and coding style in JavaScript projects. The objective of this package is provide the ESLint configurations as an extensible shared configuration that could be used by everyone and across the Feedzai's products.

This repo includes two distinguished ESLint configurations:

- `eslint-config-feedzai`- This package is our default configs that contain all of our ESLint rules, including our rules for ECMAScript 6+. If you're using React for your projects please check the `eslint-config-feedzai-react`.
  This packages requires `eslint` and `eslint-plugin-import`
- `eslint-config-feedzai-react` - This package extends the `eslint-config-feedzai` and includes the rules for React, a11y and Jest. This package requires `eslint`, `eslint-config-feedzai`, `eslint-plugin-import`, `eslint-plugin-jest`, `eslint-plugin-jsx-a11y` and  `eslint-plugin-react`.

## Usage

### Installing package dependencies

In order to list the correct versions of each package you could use this command:

```shell
npm info "eslint-config-feedzai@latest" peerDependencies
```

After this command you could install those packages manually or if you're using the **npm version > 5** you could use this shortcut:

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

**NOTE: ** Those tasks should be executed only in the  `master` branch.

The available commands are:

- `deploy:major` - creates a git tag and publish the X.0.0 version
- `deploy:minor` - creates a git tag and publish the X.Y.0 version
- `deploy:patch` - creates a git tag and publish the X.Y.Z version
