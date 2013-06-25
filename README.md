# polyphonic

<!-- [![browser support][5]][6] -->

<!-- [![build status][1]][2] [![NPM version][7]][8] [![dependency status][3]][4] -->

[![NPM version](https://badge.fury.io/js/after.png)](http://badge.fury.io/js/after)

join-calculus as async flow control

## Example

```js
var polyphonic = require("polyphonic")

var Buffer = polyphonic([
    ["get", "async put", function (s) {
        return s
    }]
])

var buffer = Buffer()

var one = buffer.get()(function (err, value) {

})
var two = buffer.get()(function (err, value) {

})

// some time later!!

buffer.put("hello")
buffer.put("world")

// now the get calls have their callbacks invoked
```

## Installation

`npm install polyphonic`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/polyphonic.png
  [2]: https://travis-ci.org/Raynos/polyphonic
  [3]: https://david-dm.org/Raynos/polyphonic.png
  [4]: https://david-dm.org/Raynos/polyphonic
  [5]: https://ci.testling.com/Raynos/polyphonic.png
  [6]: https://ci.testling.com/Raynos/polyphonic
  [7]: https://badge.fury.io/js/polyphonic.png
  [8]: https://badge.fury.io/js/polyphonic
