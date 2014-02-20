# Open Web App Templates

This is a meta-repo that tracks all the templates that Mozilla is offering for Open Web Apps. Check out the README of each template for usage instructions.

The following templates are available:

* [`mortar-app-stub`](https://github.com/mozilla/mortar-app-stub): a blank template that comes only with the basic things required to get started
* [`mortar-privileged-app-stub`](https://github.com/mozilla/mortar-privileged-app-stub): a privileged app template that demonstrates the usage of a privileged permission (systemXHR)
* [`mortar-game-stub`](https://github.com/mozilla/mortar-game-stub): a minimal web game template that handles input and a render loop
* [`mortar-list-detail`](https://github.com/mozilla/mortar-list-detail): comes with a layouts library and sets up a list-detail layout for you
* [`mortar-tab-view`](https://github.com/mozilla/mortar-tab-view), which is similar to `mortar-list-detail` but the initial layout has tabs at the button which let you switch between screens.

And finally...

* [`mortar-template-template`](https://github.com/mozilla/mortar-template-template), a template for building other templates. You probably don't need this one, unless you want to contribute with a brand new template and don't want to start from scratch.

You can view more documentation [here](https://developer.mozilla.org/en-US/docs/Apps/App_templates).

# Usage

You can simply git clone any of the above templates, or use [volo](http://volojs.org/) to create an app from one of them. If you have node installed, simply run `npm install -g volo` to get volo. Examples:

* Using git: `git clone <template-github-url> myapp`
* Using volo: `volo create myapp mozilla/<template-name>`

Each template has documentation in its README specific to what it provides, but there are a few things that all of them provide.

All of them come with an initial project structure, a volo configuration file, initial css and js files, require.js, a basic manifest.webapp, and more. These are all very useful for developing webapps.

You can use volo to fire up a development server, add javascript dependencies, and deploy you app. View [this documentation](https://developer.mozilla.org/en-US/docs/Apps/App_templates) for more details.

[require.js](http://requirejs.org/) is a module system for javascript, and it makes it easy to manage javascript dependencies. Using this, we can easily minify and concatenate all your javascript without any extra work. It also organizes your javascript into a clean structure. Read more about it [here](https://developer.mozilla.org/en-US/docs/Apps/App_templates#What_Now.3F).

The rest of the project is simply a starting point for all your HTML, CSS, and javascript.

