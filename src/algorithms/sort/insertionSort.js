'use strict'

/**
 * Insertion sort O(n^2)
 * @param  Array arr takes an array argument
 * @return Array     returns an array of sorted items
 */

var insertionSort = function (arr) {
  for (var i = 0, l = arr.length; i < l; i++) {
    var temp = arr[i]

    for (var j = i - 1; j >= 0 && arr[j] > temp; --j) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}

module.exports = insertionSort
