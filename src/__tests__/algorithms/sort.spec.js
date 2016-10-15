'use strict'

var assert = require('assert')

var Sort = require('../../algorithms/sort')

describe('Sort Algorithms', function() {
  it('bubbleSort should sort the given arrays', function() {
    sortHelper(Sort.bubble)
  })
  it('selectionSort should sort the given arrays', function() {
    sortHelper(Sort.selection)
  })
  it('insertionSort should sort the given arrays', function() {
    sortHelper(Sort.insertion)
  })
  it('mergeSort should sort the given arrays', function() {
    sortHelper(Sort.merge)
  })
  it('quickSort should sort the given arrays', function() {
    sortHelper(Sort.quick)
  })

})


var sortHelper = function (sortFn) {
  assert.deepEqual(sortFn([]), [])
  assert.deepEqual(sortFn([0]), [0])
  assert.deepEqual(sortFn([1, 0]), [0, 1])
  assert.deepEqual(sortFn([2, 0, 1]), [0, 1, 2])
  assert.deepEqual(sortFn([3, 0, 2, 1]), [0, 1, 2, 3])
  assert.deepEqual(sortFn([35, 0, 2, 1, 10]), [0, 1, 2, 10, 35])
  assert.deepEqual(sortFn([-5, 0, 2, 1, 10]), [-5, 0, 1, 2, 10])
}
