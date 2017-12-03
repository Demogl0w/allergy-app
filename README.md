# AllergyApp

## Notes for Developers

* Words are scary and there are a lot of them here. **Follow the short
  bullet-points below to get started.**

  * [Install](https://yarnpkg.com/en/docs/install) the `yarn` package manager.
  * Clone this repo to a local directory.
  * Run `yarn install` in this local directory to install all the `Node.js`
    dependencies according to the `package.json` file.
  * Edit [VSCode settings file](#vscode-settings-file).
  * Install [VSCode extensions](#vscode-extensions).

* This was initially created using the `yarn` package
  [Create React Native App](https://github.com/react-community/create-react-native-app).
  Information about its configuration and gotchas are available at that link.
  The most recent version of the `create-react-native-app` guide is available
  [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

  * Note: `create-react-native-app` bundles configurations like `Jest`
    (testing). If/when we get to the stage of needing to edit these
    configurations, we'll need to `eject` this app and then we'll get a dumpster
    full of configuration files to work with. **Note that `eject` is a one-way
    process.**

* See the `GH_Docs` folder for some quick configuration information (e.g.
  enabling Git Flow in GitKraken)

* Bundled some useful files/directories that will help us in code uniformity and
  quality. These are

  * `.eslintrc` file for configurating ES Linting rules (this will tell you if
    you initialize a variable you don't use, etc.)
  * `.travis.yml` file for connecting up to a
    [Travis-CI](https://travis-ci.org/) service.
  * `.vscode` directory for launching the Chrome debugging plugin for VSCode.

* Added some `devDependencies` to the `package.json` file. These are used for
  code assurance (`eslint`), testing (`codecov`, `jest-expo`,
  `react-test-renderer`), and Doing Future Things(TM) (`react-native-scripts`).

  ```js
  "devDependencies": {
    "codecov": "^3.0.0",
    "jest-expo": "23.0.0",
    "react-native-scripts": "1.8.1",
    "react-test-renderer": "16.0.0"
  },
  ```

* Added `prop-types` `peerDependency` to the `package.json` file. We need this
  for `react-native`.
* Added `dependencies` to the `package.json` file. We'll need `dotenv` for our
  `.env` file **that should never go to the GitHub repo**, which we'll use to
  hold at least two API configuration variables. `firebase-admin` is used to
  connect to our `Cloud Firestore` database. Finally, `lodash` is installed for
  its aid in dealing with common formatting/filtering/other array/object
  operations.

  ```js
  "dotenv": "^4.0.0",
  "firebase-admin": "^5.5.1",
  "lodash": "^4.17.4",
  ```

### VSCode Settings File

* Here is a VSCode Settings file (`File -> Preferences -> Settings`) which may
  be useful. It handles the linting options as well as formatting on save. If
  we're not using the same prettifier or not formatting on save, we'll suddenly
  have _thousands_ of changes with each push as each space or comma
  placement/omission will count as another change. We will save tons of pain by
  using this:

  ```js
  {
    "editor.formatOnSave": true,
    "window.zoomLevel": 0,
    "editor.wordWrap": "on",
    "editor.fontSize": 16,
    "prettier.eslintIntegration": true,
    "eslint.enable": true,
    "eslint.packageManager": "npm",
    "eslint.alwaysShowStatus": true,
    "eslint.options": { "configFile": ".eslintrc" },
    "eslint.run": "onType",
    "eslint.validate": ["javascript", "javascriptreact"]
  }
  ```

### VSCode Extensions

* There are also some _exceedingly_ useful VSCode extensions that will make
  development significantly easier. The really useful ones are in **bold**:

  * [**Debugger for Chrome**](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  * [**ESLint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
  * [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  * [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  * [Preview](https://marketplace.visualstudio.com/items?itemName=searKing.preview-vscode)
  * [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  * [**Rainbow Brackets**](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
  * [React/Redux/react-router Snippets](https://marketplace.visualstudio.com/items?itemName=discountry.react-redux-react-router-snippets)
  * [**Syncing**](https://marketplace.visualstudio.com/items?itemName=nonoroazoro.syncing)
