/**
 * Sort constructor
 * @return Function   returns a constructor functions with the new Object constructor
 */

var Sort = (function () {
  'use strict'

  var SortInit = function () {}

  SortInit.prototype = {
    bubble      : require('./bubbleSort'),
    selection   : require('./selectionSort'),
    insertion   : require('./insertionSort'),
    merge       : require('./mergeSort'),
    quick       : require('./quickSort')
  }

  return new SortInit()
})()

module.exports = Sort
