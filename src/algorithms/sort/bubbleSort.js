'use strict'

/**
 * Bubble sort algorithm O(n^2)
 * @param  Array arr takes an array argument
 * @return Array     returns an array of sorted items
 */

var bubbleSort = function (arr) {
  do {
    var swapped = false
    for (var i = 0, l = arr.length; i < l - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  }
  while (swapped === true)
  return arr
}

module.exports = bubbleSort
