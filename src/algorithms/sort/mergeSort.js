'use strict'

/**
 * Merge sort algorithm O(n log n)
 * @param  Array arr takes an array argument
 * @return Array     returns an array of sorted items
 */

var mergeSort = function (arr) {
  if (arr.length < 2) return arr

  var middle = parseInt(arr.length / 2)
  var left = mergeSort(arr.slice(0, middle))
  var right = mergeSort(arr.slice(middle, arr.length))

  return merge(right, left)

  function merge (right, left) {
    var result = []

    while (right.length > 0 && left.length > 0) {
      result.push(right[0] < left[0] ? right.shift() : left.shift())
    }
    return result.concat(right.length ? right : left)
  }
}

module.exports = mergeSort
