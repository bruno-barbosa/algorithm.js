'use strict'

/**
 * Selection sort O(n^2)
 * @param  Array arr takes an array argument
 * @return Array     returns an array of sorted items
 */

var selectionSort = function (arr) {
  var length = arr.length

  for (var i = 0; i < length - 1; i++) {
    var min = i

    for (var j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) {
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

module.exports = selectionSort
