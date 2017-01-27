# UX Core

UX Core is a HTML, CSS and JavaScript framework for developing web applications.

## Getting Started

### Visual Studio 2015

Add the following to bower.json and Visual Studio should install the Bower package automatically when you save the file:

```json
"dependencies": {
  "ux-core": "git://github.com/mcapewell/ux-core.git"
}
```

Add the following to your webpage and you should be good to go:

```html
<link rel="stylesheet" href="~/lib/ux-core/dist/uxcore.css">
```

### Visual Studio Code

Run the following command from the command line to install the Bower package:

```
bower install git://github.com/mcapewell/ux-core.git#master
```

Add the following to your webpage and you should be good to go:

```html
<link rel="stylesheet" href="bower_components/ux-core/dist/uxcore.css">
```

## Contributing

Clone the Git repository and install the npm dev-dependencies:

```
git clone https://github.com/mcapewell/ux-core.git
npm install npm@latest -g
npm install -g gulp
npm install
```
Perform a build in Visual Studio Code:

Windows: <kbd>Ctrl</kbd> - <kbd>Shift</kbd> - <kbd>B</kbd>

Mac: <kbd>Cmd</kbd> - <kbd>Shift</kbd> - <kbd>B</kbd>

## License

Code and documentation copyright (c) 2017 Matthew Capewell. Code and docs released under the [MIT License](LICENSE.md).
