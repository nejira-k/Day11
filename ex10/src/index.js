function mySplice(arr1, arr2, n) {  
    var result = [];
    result.push(...arr2.splice(0));
    result.push(...arr1);
    result.push(...arr2.splice(n, arr2.length));
    return result;
}
  console.log(mySplice([1, 2, 3], [4, 5], 1));
  console.log(mySplice([1, 2, 3], [4, 5], 2));
  console.log(mySplice(["b", "c"], ["a", "d"], 1));
  console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
  module.exports = mySplice;