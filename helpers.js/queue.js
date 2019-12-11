// ADDS TO THE FRONT
// REMOVES FROM THE BACK
// CAN BE USED AS BST BREATH
function Queue() {
  const items = [];
  const errors = ["Underflow", "No elements in queue"];
  function isEmpty() {
    return items.length === 0;
  }
  function error(level) {
    return errors[level];
  }
  return {
    add(element) {
      items.push(element);
    },
    remove() {
      if (isEmpty()) return error(0);
      return items.shift();
    },
    peek() {
      // GETS HEAD || NULL
      if (isEmpty()) return error(1);
      return items[0];
    },
    print() {
      return items;
    }
  };
}

// [1,2,3,4,5] -> [2,3,4,5]
const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.remove();
queue.print();
