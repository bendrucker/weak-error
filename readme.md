# weak-error [![Build Status](https://travis-ci.org/bendrucker/weak-error.svg?branch=master)](https://travis-ci.org/bendrucker/weak-error) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/weak-error.svg)](https://greenkeeper.io/)

> Weakmapped error event with a global capture hook


## Install

```
$ npm install --save weak-error
```


## Usage

```js
var WeakError = require('weak-error')
var ErrorEvent = WeakError()
var obj = {}

// listen on only errors broadcasted on `obj`
ErrorEvent.listen(obj, onError)
// listen to all errors
WeakError.onError(onError)

ErrorEvent.broadcast({}, new Error('OH NO'))
//=> OH NO
//=> OH NO

function onError (err.message) {
  console.log(err.message)
}
```

## API

#### `WeakError()` -> `event`

Constructs a [`weakmap-event`](https://github.com/eaze/weakmap-event). The event will work normally, but you can also listen on events globally. 

#### `WeakError.onError(listener)` -> `function`

Listen globally on errors. Returns an unlisten function.

##### listener

*Required*  
Type: `function`

A listener to call whenever any error is broadcasted, regardless of the key used.


## License

MIT © [Ben Drucker](http://bendrucker.me)
