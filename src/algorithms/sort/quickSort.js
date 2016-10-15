'use strict'

/**
 * Quick sort algorithm O(n log n)
 * @param Array arr takes an array argument
 * @return Array    returns an array of sorted items
 */

var quickSort = function (arr) {
  if (arr.length <= 1) return arr

  var pivot = arr[0]
  var last = arr.slice(1)

  return Array.prototype.concat.call(
    quickSort(last.filter(item => item <= pivot)),
    pivot,
    quickSort(last.filter(item => item > pivot))
  )
}

module.exports = quickSort
