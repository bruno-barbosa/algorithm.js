'use strict'

var assert = require('assert')

var sortHelper = function (sortFn) {
  assert.deepEqual(sortFn([]), [])
  assert.deepEqual(sortFn([0]), [0])
  assert.deepEqual(sortFn([1, 0]), [0, 1])
  assert.deepEqual(sortFn([2, 0, 1]), [0, 1, 2])
  assert.deepEqual(sortFn([3, 0, 2, 1]), [0, 1, 2, 3])
  assert.deepEqual(sortFn([35, 0, 2, 1, 10]), [0, 1, 2, 10, 35])
  assert.deepEqual(sortFn([-5, 0, 2, 1, 10]), [-5, 0, 1, 2, 10])
}

module.exports = sortHelper
