// ADDS TO THE FRONT
// REMOVES FROM THE BACK
// CAN BE USED AS BST BREATH
function Stack() {
  const items = [];
  const errors = ["Underflow", "No elements in stack"];
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
      return items.pop();
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

// [1,2,3,4,5] -> [1,2,3,4]
const stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.remove();
stack.print();
