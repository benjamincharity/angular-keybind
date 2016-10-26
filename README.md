# angular-keybind

[![MIT License][license_image]][license_url] [![Coverage Status][coveralls_badge]][coveralls_link] [![NPM version][npm_version_image]][npm_url] [![CircleCI][circle_badge]][circle_link]

:abc: :nut_and_bolt: A small AngularJS module to bind specific keypress events to methods.

At times you may need to attach specific functionality to an element based on specific key input.
For simple cases, AngularJS has a built in solution called [`ngKeyup`][ng_keyup] that works well. At
other times you may need something with a bit more power. angular-keybind was built to solve this
more complex use case.

> [:tv: **Demo**][demo]

_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [Attributes](#attributes)
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

Use the directive as an attribute on any element that can be focused _(it doesn't need to be an
input)_. It will listen for keypress events on the element and fire the associated method.

```html
<!--
  13 is the key code for 'enter'
  32 is the key code for 'space'
-->
<input
  bc-keybind
  bc-keys="['13, '32']"
  bc-method="vm.myMethod"
>
<!--
  Notice! When passing in the method reference, parenthesis `()` should not be added.
-->
```

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

> [:tv: Demo][demo]

### Attributes

Most use cases will only need to use `bc-keys` and `bc-method`. For more advanced cases, a second
and third set of attributes can be used.

| Attribute    | Accepts | Details |
|--------------|---------|---------|
| `bc-keys`    | Array   | Expects an array of key codes |
| `bc-method`  | Method  | Expects a method which will be called when a keypress matches one of the keys passed into `bc-keys` |
| `bc-keys2`   | Array   | Expects an array of key codes |
| `bc-method2` | Method  | Expects a method which will be called when a keypress matches one of the keys passed into `bc-keys2` |
| `bc-keys3`   | Array   | Expects an array of key codes |
| `bc-method3` | Method  | Expects a method which will be called when a keypress matches one of the keys passed into `bc-keys3` |

> Learn more about keycodes on [css-tricks][keycodes]

```html
<!--
  In this more advanced use-case we need 'enter' to trigger a specific method.
  We also need a separate method to be triggered when any arrow key is used.
-->
<input
  bc-keybind
  bc-keys="['13']"
  bc-method="vm.myMethodForEnter"
  bc-keys="['37', '38', '39', '40']"
  bc-method2="vm.myMethodForArrows"
>
```

```javascript
export class YourController {

    constructor() {}

    // I will be called if any key from the `bc-keys` array is used while the element has focus
    myMethodForEnter(event) {
        console.log('One of the `bc-keys` keys was pressed! Pressed key: ', event.which);
    }

    // I will be called if any key from the `bc-keys2` array is used while the element has focus
    myMethodForArrows(event) {
        console.log('One of the `bc-keys2` keys was pressed! Pressed key: ', event.which);
    }

}
```

> [:tv: Demo][demo]


## Development

- `npm run build` - Build JS
- `npm run watch` - Watch JS and rebuild on change
- `npm run test` - Run tests
- `npm run watch:tests` - Watch for changes in `.spec.js` files and re-run the tests




[issues]: https://github.com/benjamincharity/angular-keybind/issues
[demo]: http://codepen.io/benjamincharity/pen/ALzOwo?editors=1001
[demo_collection]: http://codepen.io/collection/XEyqxM/

[ng_keyup]: https://docs.angularjs.org/api/ng/directive/ngKeyup
[keycodes]: https://css-tricks.com/snippets/javascript/javascript-keycodes/

[coveralls_badge]: https://coveralls.io/repos/github/benjamincharity/angular-keybind/badge.svg?branch=master
[coveralls_link]: https://coveralls.io/github/benjamincharity/angular-keybind?branch=master
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-keybind
[npm_version_image]: http://img.shields.io/npm/v/angular-keybind.svg
[circle_badge]: https://circleci.com/gh/benjamincharity/angular-keybind/tree/master.svg?style=svg
[circle_link]: https://circleci.com/gh/benjamincharity/angular-keybind/tree/master

