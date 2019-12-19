// 100% WORKING SOLUTION JS
// WOULDN'T USE IT ON A REAL INTERVIEW ENVIRONMENT BECAUSE IN JS I'M NOT SUPOSED TO HAVE TO CODE A TREESET AND A BINARY SEARCH TO REPLACE IT'S HIGER METHOD..
class TreeSet {
  constructor(comparator) {
    this.length = 0;
    this.elements = [];
    if (comparator) this.comparator = comparator;
    else
      this.comparator = function(a, b) {
        return a - b;
      };
  }

  size() {
    return this.elements.length;
  }

  last() {
    return this.elements[this.length - 1];
  }

  first() {
    return this.elements[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  pollLast() {
    if (this.length > 0) {
      this.length--;
      return this.elements.splice(this.length, 1);
    }
    return null;
  }

  pollFirst() {
    if (this.length > 0) {
      this.length--;
      return this.elements.splice(0, 1);
    }
    return null;
  }

  add(element) {
    let index = this.binarySearch(element);
    if (index < 0) {
      index = -index - 1;
    }
    this.elements.splice(index, 0, element);
    this.length++;
  }

  higher(target) {
    let start = 0;
    let end = this.elements.length - 1;
    let ans = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      // Move to right side if target is
      // greater.
      if (this.elements[mid] <= target) start = mid + 1;
      // Move left side.
      else {
        ans = mid;
        end = mid - 1;
      }
    }
    return ans > -1 ? this.elements[ans] : null;
  }

  /**
   * Performs a binary search of value in array
   * @param {number[]} array - Array in which value will be searched. It must be sorted.
   * @param {number} value - Value to search in array
   * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
   */
  binarySearch(value) {
    var low = 0;
    var high = this.elements.length - 1;

    while (low <= high) {
      var mid = (low + high) >>> 1;
      var midValue = this.elements[mid];
      var cmp = this.comparator(midValue, value);
      if (cmp < 0) {
        low = mid + 1;
      } else if (cmp > 0) {
        high = mid - 1;
      } else {
        return mid;
      }
    }

    return -(low + 1);
  }
}

// Complete the maximumSum function below.
function maximumSum(a, m) {
  var max = 0;
  var sum = 0;
  var sums = new TreeSet();

  for (let i = 0; i < a.length; i++) {
    let v = a[i];
    sum = (sum + (a[i] % m)) % m;
    max = Math.max(max, sum);

    let pr = sums.higher(sum);
    if (pr != null) {
      max = Math.max(max, (sum - pr + m) % m);
    }

    sums.add(sum);
  }

  return max;
}

maximumSum(
  "846930887 1681692778 1714636916 1957747794 424238336 719885387 1649760493 596516650 1189641422 1025202363 1350490028 783368691 1102520060 2044897764 1967513927 1365180541 1540383427 304089173 1303455737 35005212 521595369 294702568 1726956430 336465783 861021531 278722863 233665124 2145174068 468703136 1101513930 1801979803 1315634023 635723059 1369133070 1125898168 1059961394 2089018457 628175012 1656478043 1131176230 1653377374 859484422 1914544920 608413785 756898538 1734575199 1973594325 149798316 2038664371 1129566414"
    .split(" ")
    .map(el => parseInt(el)),
  1804289384
); // 1802192837 got 1801979803
