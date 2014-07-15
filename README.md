# Mortar

### _A collection of templates to kickstart app development_

This is a _meta-repo_ that tracks all the templates that Mozilla is offering for Open Web Apps.

The best and "more finished" templates are:
* [`mortar-privileged-empty-app`](https://github.com/mozilla/mortar-privileged-empty-app): an empty privileged template to quickly get started when you know what you're doing.
* [`mortar-privileged-remote-app`](https://github.com/mozilla/mortar-privileged-remote-app): a privileged app template that demonstrates the usage of a privileged permission (`systemXHR`) to download remote content.

These following are in various states of code quality and simplicity. They need to be simplified and/or code reviewed to ensure they are as good as the previously mentioned templates:

* [`mortar-app-stub`](https://github.com/mozilla/mortar-app-stub): a blank template for a hosted app that comes only with the basic things required to get started in app making.
* [`mortar-game-stub`](https://github.com/mozilla/mortar-game-stub): a minimal web game template that handles input and a render loop.
* [`mortar-list-detail`](https://github.com/mozilla/mortar-list-detail): comes with a layouts library and sets up a list-detail layout for you.
* [`mortar-tab-view`](https://github.com/mozilla/mortar-tab-view): a template with a tabbed layout.

And finally...

* [`mortar-template-template`](https://github.com/mozilla/mortar-template-template), a template for building other templates. You probably don't need this one, unless you want to contribute with a brand new template and don't want to start from scratch.

You can view more documentation [here](https://developer.mozilla.org/en-US/docs/Apps/App_templates).

If you want to help or get involved with the template updating, feel free to have a look at [this bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1038703) that tracks required work and dependencies. Ask us any question in #apps in irc.mozilla.org!

## Usage

To get all the templates at the same time, just clone this repository:

````
git clone --recursive https://github.com/mozilla/mortar.git
````

Of course, you can also separately clone the templates you're interested in.

Check out the README.md file of each template for its usage instructions.


