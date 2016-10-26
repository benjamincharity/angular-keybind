# angular-keybind

:abc: :nut_and_bolt: A small AngularJS module to bind specific keypress events to methods.

[![MIT License][license_image]][license_url] [![Coverage Status][coveralls_badge]][coveralls_link] [![NPM version][npm_version_image]][npm_url] [![CircleCI][circle_badge]][circle_link]

> [:tv: **Demo**][demo]

_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Development](#development)



## Installation

#### NPM
```bash
npm install angular-keybind --save
```

#### Bower
```bash
bower install angular-keybind --save
```

#### Manually

Add the script to your HTML:

```html
<script src="../path/to/your/(npm|bower)_components/angular-keybind/dist/angular-keybind.js"></script>
```

##Dependencies

- Angular.js (^1.4.0)


## Usage
Include `bc.AngularKeybind` as a dependency in your project:

```javascript
angular.module('YourModule', ['bc.AngularKeybind']);
```

Use this directive as an attribute on any element that can be focused. It will listen for keypress
events on the element and fire the associated method.

```javascript
export class YourController {

    constructor() {}

    // I will be called if either enter or space is triggered while the element has focus
    myMethod(event) {
        console.log('One of our keys was pressed!');
        console.log('Original event object: ', event);
    }

}
```

```html
<!--
  13 is the key code for 'enter'
  32 is the key code for 'space'
-->
<input bc-keybind bc-keys="['13, '32']" bc-method="vm.myMethod">
```

> Notice! When passing in the method reference, parenthesis `()` should not be added.



## Development

- `npm run build` - Build JS
- `npm run watch` - Watch JS and rebuild on change
- `npm run test` - Run tests
- `npm run watch:tests` - Watch for changes in `.spec.js` files and re-run the tests




[issues]: https://github.com/benjamincharity/angular-keybind/issues
[demo]: http://codepen.io/benjamincharity/pen/ALzOwo?editors=1000
[demo_collection]: http://codepen.io/collection/XEyqxM/

[keycodes]: https://css-tricks.com/snippets/javascript/javascript-keycodes/

[coveralls_badge]: https://coveralls.io/repos/github/benjamincharity/angular-keybind/badge.svg?branch=master
[coveralls_link]: https://coveralls.io/github/benjamincharity/angular-keybind?branch=master
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-keybind
[npm_version_image]: http://img.shields.io/npm/v/angular-keybind.svg
[circle_badge]: https://circleci.com/gh/benjamincharity/angular-keybind/tree/master.svg?style=svg
[circle_link]: https://circleci.com/gh/benjamincharity/angular-keybind/tree/master

