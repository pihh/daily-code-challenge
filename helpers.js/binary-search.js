// Initialize search bounds to the length of the array
let left = 0;
let right = array.length - 1;

// If the only possible location of the value is outside of the current search bounds, it doesn't exist in the array
while (left <= right) {
  // Calculate a middle value
  let mid = left + (right - left) / 2;

  // If the search value is found at the middle of the current search range
  if (array[mid] == searchValue) {
    return true;
  }
  // If the search value would fall in the left half of the dataset (i.e., less than middle), search left
  else if (searchValue < array[mid]) {
    right = mid - 1;
  }
  // Else, the search value can only fall in the right half of the dataset (i.e., greater than middle), search right
  else {
    // search right
    left = mid + 1;
  }
}
// This is only reached if the search value was never found
return false;
