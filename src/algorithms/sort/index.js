'use strict'

/**
 * Sort constructor
 * @return Function   returns a constructor functions with the new Object constructor
 */

var Sort = (function () {
  var SortInit = function () {}

  SortInit.prototype = {
    init        : function () {},
    bubble      : require('./bubbleSort'),
    selection   : require('./selectionSort'),
    insertion   : require('./insertionSort'),
    merge       : require('./mergeSort'),
    quick       : require('./quickSort')
  }

  return new SortInit() // eslint-disable-line
})()

module.exports = Sort
