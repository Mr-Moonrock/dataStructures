// countZeros:: Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
// Time Complexity: O(log N)

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx)/ 2)
    let middleVal = arr[middleIdx];

    if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return arr.length- leftIdx ;
}
// countZeroes([1,1,1,1,0,0], 0)
// countZeroes([1,0,0,0,0], 0)
//  countZeroes([0,0,0], 0)
//  countZeroes([1,1,1,1], 0)

// sortFrequency:: Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Time Complexity: O(log N)

function sortedFrequency(arr, val) {
  let leftIdx = findFirstInstance(arr, val);
  let rightIdx= findLastInstance(arr, val);

  if (leftIdx === -1 && rightIdx === -1) {
    return -1;
  }
  let result = rightIdx - leftIdx + 1;
  return result;
}

function findFirstInstance(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1
  let firstIdx = -1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx)/2);
    let midVal = arr[midIdx];

    if (midVal < val) {
        leftIdx = midIdx + 1;
    } else if (midVal === val) {
        firstIdx = midIdx;
        rightIdx= midIdx - 1;
    } else {
        rightIdx = midIdx - 1;
    }
  }
  
  return firstIdx;
}

function findLastInstance(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1
  let lastIdx = -1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx)/2);
    let midVal= arr[midIdx];

    if (midVal > val) {
        rightIdx = midIdx - 1;
    } else if (midVal === val) {
        lastIdx = midIdx;
        leftIdx = midIdx + 1;
    } else {
        leftIdx = midIdx + 1;
    }
  }
  return lastIdx;
}  
  // sortedFrequency([1,1,2,2,2,2,3], 2) // 4
  // sortedFrequency([1,1,2,2,2,2,3], 3) // 1
  // sortedFrequency([1,1,2,2,2,2,3], 1) // 2
  // sortedFrequency([1,1,2,2,2,2,3], 4) // -1


// findRotatedIndex:: Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.
// Time Complexity: O(log N)

function findRotatedIndex(arr, val) {
  const pivotIndex= findPivotPoint(arr);
  const leftResult = binarySearch(arr, val, 0, pivotIndex - 1);
  const rightResult = binarySearch(arr, val, pivotIndex, arr.length - 1);

  console.log('Answer:', leftResult !== -1 ? leftResult : rightResult)
  return leftResult !== -1 ? leftResult : rightResult;
}

function findPivotPoint(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx < rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[midIdx];
    let rightVal = arr[rightIdx];

    if (middleVal < rightVal) {
        leftIdx = midIdx + 1;
    } else {
        rightIdx = midIdx;
    }
  }
  return leftIdx;
}

function binarySearch(arr, val, leftIdx, rightIdx) {

  while(leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (middleVal === val) {
      return middleIdx;
    }

    if (leftVal < middleVal) {
      if (val >= leftVal && val < middleVal) {
          rightIdx = middleIdx - 1;
      } else {
          leftIdx = middleIdx + 1;
      }
    } else {
      if (val > middleVal && val <= rightVal) {
          leftIdx = middleIdx + 1;
      } else {
          rightIdx = middleIdx - 1;
      }
    }
  }
  return -1;
}

//  findRotatedIndex([3,4,1,2],4) // 1
//  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
//  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
//  findRotatedIndex([37,44,66,102,10,22],14) // -1
//  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1


// findRotationCount:: Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
// Time Complexity: O(log N)

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid + arr.length - 1) % arr.length;
    
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    } else if (arr[mid] >= arr[left]) {
      left = mid + 1;
    } else {
      
      right = mid - 1;
    }
  }
  return 0;
}

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0
// console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
// console.log(findRotationCount([7, 9, 11, 12, 5]))
// console.log(findRotationCount([7, 9, 11, 12, 15]))

// findFloor:: Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
// Time Complexity: O(log N)

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return arr[mid];
    } else if (arr[mid] < x) {
      floor = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return floor;
}

console.log(findFloor([1,2,8,10,10,12,19], 9)); // Output: 8
console.log(findFloor([1,2,8,10,10,12,19], 20)); // Output: 19
console.log(findFloor([1,2,8,10,10,12,19], 0)); // Output: -1



