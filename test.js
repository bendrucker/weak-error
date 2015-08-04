'use strict'

var test = require('tape')
var WeakError = require('./')

test(function (t) {
  t.plan(2)
  var ErrorEvent = WeakError()
  var obj = {}
  ErrorEvent.listen(obj, function (value) {
    t.equal(value, 'foo')
  })
  WeakError.onError(function (value) {
    t.equal(value, 'foo')
  })
  ErrorEvent.broadcast(obj, 'foo')
})
