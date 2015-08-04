'use strict'

var WeakmapEvent = require('weakmap-event')
var Event = require('geval/event')
var Single = require('individual/one-version')

module.exports = WeakErrorEvent

// Singleton across the same major version, otherwise throws
var onError = Single('weak-error', '1', Event())

function WeakErrorEvent () {
  var event = WeakmapEvent()

  var broadcast = event.broadcast
  event.broadcast = broadcastError

  return event

  function broadcastError (obj, value) {
    onError.broadcast(value)
    return broadcast(obj, value)
  }
}

WeakErrorEvent.onError = onError.listen
