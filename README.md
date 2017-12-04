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

* This was initially created using the `yarn` package and the following tools:

  * `react-native-cli`, installed `globally`
  * `react-native init`

* _So many_ requirements must be met to run this. In a nutshell, you'll need to
  [cover all bases here](http://facebook.github.io/react-native/docs/getting-started.html),
  at least doing the following:

  * [Install JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  * Set up some `Environment Variables`. Under Windows, do this:

    * Add: `JAVA_HOME` with the value `C:\Program Files\Java\jdk1.8.0_151`
      (where `JDK 8 was installed`).
    * Add: `ANDROID_HOME` with the value
      `C:\Users\<Username>\AppData\Local\Android\Sdk`
    * Edit: `PATH` by adding a new entry of
      `C:\Users\<Username>\AppData\Local\Android\Sdk\platform-tools`

  * Install Python 2.7.x. It's needed for ... something.
  * Install `Android Studio`. From here, we'll run the Android virtual device.
    * Open an existing project, select `<this directory>/android`.
    * You'll get a `failed to sync` message. That's okay; click on the `install
      missing platform...` link.
    * _Then_ you'll get another error. Click on the `sync build tools` link in
      the bottom area of `Android Studio`.
    * Do not upgrade `Gradle`. Here there be dragons.
  * Let's install our virtual Android device:
    * In `Android Studio`, click on `Tools > Android > AVD Manager > Create
      Virtual device`
    * Select a device. I've gone with a `Nexus 5` phone. Click on `Next`.
    * I've selected `Nougat` (API 25) for a system image to install on this
      virtual device.

* We'll be running under the `Git Flow` philosophy/release pattern. See the
  `GH_Docs` folder for some quick configuration information (e.g. enabling Git
  Flow in GitKraken)

* I've bundled some useful files/directories that will help us in code
  uniformity and quality. These are

  * `.eslintrc` file for configurating ES Linting rules (this will tell you if
    you initialize a variable you don't use, etc.)
  * `.travis.yml` file for connecting up to a
    [Travis-CI](https://travis-ci.org/) service.
  * `.vscode` directory for launching the Chrome debugging plugin for VSCode.

* Added some `devDependencies` to the `package.json` file. These are used for
  code assurance (`eslint`) and testing (`codecov`). `babel-*` comes via
  `react-native init`.

  ```js
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-jest": "21.2.0",
    "babel-preset-react-native": "4.0.0",
    "codecov": "^3.0.0",
    "eslint": "^4.12.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-jsx-a11y": "^6.0.2",
    "eslint-plugin-react": "^7.5.1",
    "eslint-plugin-react-native": "^3.2.0",
    "eslint-plugin-security": "^1.4.0",
    "jest": "21.2.1",
    "react-devtools": "^3.0.0",
    "react-native-scripts": "1.8.1",
    "react-test-renderer": "16.0.0"
  },
  ```

* Added `dependencies` to the `package.json` file. We'll need
  `react-native-dotenv` for our `.env` file **that should never go to the GitHub
  repo**, which we'll use to hold at least two API configuration variables.
  `firebase-admin` is used to connect to our `Cloud Firestore` database.
  Finally, `lodash` is installed for its aid in dealing with common
  formatting/filtering/other array/object operations.

  ```js
  "dependencies": {
    "firebase-admin": "^5.5.1",
    "lodash": "^4.17.4",
    "react": "16.0.0",
    "react-native": "0.50.4",
    "react-native-dotenv": "^0.1.0",
    "redux": "^3.7.2"
  },
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
