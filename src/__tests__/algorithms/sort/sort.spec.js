'use strict'

var sortHelper = require('./sortHelper')
var Sort = require('../../../algorithms/sort')

var sort = Sort()

describe('Sort Algorithms', function() {
  it('bubbleSort should sort the given arrays', function() {
    sortHelper(sort.bubble)
  })
  it('selectionSort should sort the given arrays', function() {
    sortHelper(sort.selection)
  })
  it('insertionSort should sort the given arrays', function() {
    sortHelper(sort.insertion)
  })

})
