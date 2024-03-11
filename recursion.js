/** product: calculate the product of an array of numbers. */

function product(nums) {
if (nums.length === 0) {
  return 1;
} else {
  return nums[0] * product(nums.slice(1));
}
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    const firstWordLength = words[0].length;
    const restOfWordsLength = longest(words.slice(1))
    return Math.max(firstWordLength, restOfWordsLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str[0] + everyOther(str.slice(2))
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
      return true;
  } else {
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function search(index) {
    if (index >= arr.length) {
      return -1;
  }
  
  if (arr[index] === val) {
      return index;
  } else {
      return search(index + 1);
    }
  }
  return search(0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
      return '';
  } else {
      return str[str.length - 1] + revString(str.substring(0, str.length -1));
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
          result= result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length -1;

  while (left <= right) {
    let mid = Math.floor((left + right) /2);

    if (arr[mid] === val) {
        return mid;
    } else if (arr[mid] < val) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
