'use strict'

/**
 * Sort constructor
 * @return Function   returns a constructor functions with the new Object constructor
 */

var Sort = function () {
  return new Sort.prototype.init() // eslint-disable-line
}

Sort.prototype = {
  init        : function () {},
  bubble      : require('./bubbleSort'),
  selection   : require('./selectionSort'),
  insertion   : require('./insertionSort')
}

Sort.prototype.init.prototype = Sort.prototype

module.exports = Sort
