# React Redux Template

An opinionated development-ready React-Redux boilerplate that will instantly get you going.

## Features
* [x] React
* [x] Redux
* [x] Redux DevTools
* [ ] React Router
* [x] Webpack
  * [x] Babel (react, es2015, stage-2)
  * [x] SASS
  * [x] Watcher
  * [ ] Hot reloading
* [x] Express server
* [x] .editorconfig
* [x] Flow


## Setup
Install project dependencies:
```
npm install
```

Start app:
```
npm start
```

### DevTools

Install the Redux developer tools Chrome extension – it's extremely useful:

https://chrome.google.com/webstore/detail/redux-devtools

You might also find Facebooks React Chrome extension helpful:

https://chrome.google.com/webstore/detail/react-developer-tools


## Styling
Require `components` and `containers` related stylesheets in your `.js` files like so:

```es6
require('../stylesheets/containers/App.scss')
require('../stylesheets/components/Button.scss')
```
Using this approach, you have to take care about the order in which you require styles.

Write your SCSS styles in the appropriate subfolders in `stylesheets/` directory.

### Base
The `base/` folder contains boilerplate stuff such as:
* `reset.scss` or `normalize.scss`
* `typography.scss`

### Components
The `components/` folder contains components-specific styles for smaller parts of your app such as:
* `Button.scss`
* `List.scss`
* `forms/ContactForm.scss`

### Containers
The `containers/` folder contains container-specific styles for major parts of your app such as:
* `App.scss`
* `Home.scss`
* `Contact.scss`

### Utils
The `utils/` folder contains global variables, mixins, functions, helper selectors and similar:
* `variables.scss` or `config.scss`
* `mixins.scss`
* `functions.scss`
* `placeholders.scss` or `helpers.scss`

### Vendors
The `vendors/` folder contains 3rd-party libraries and frameworks such as:
* `materialize.scss`
* `bootstrap.scss`
* `jquery-ui.scss`
* `wysiwyg-editor.scss`


## Licence

UNLICENCED
