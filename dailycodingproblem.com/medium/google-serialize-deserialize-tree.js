// Not the greatest expert in Bonary trees , sorry
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data, left = null, right = null) {
    const Node = { data, left, right };
    let currentNumberNode;

    if (!this.root) {
      this.root = Node;
      return;
    }

    currentNumberNode = this.root;

    while (currentNumberNode) {
      if (data < currentNumberNode.data) {
        //if current num node don't have Node properties
        //we will assign it node properties
        if (!currentNumberNode.left) {
          currentNumberNode.left = Node;
          break;
        } else {
          //if it has node properties and it is sent by root to left
          //we will make it a left node because it is smaller than root node
          currentNumberNode = currentNumberNode.left;
        }
        //if data is larger than cuurent data, send it in right subtree
      } else if (data > currentNumberNode.data) {
        //if current num node don't have Node properties
        //we will assign it node properties
        if (!currentNumberNode.right) {
          currentNumberNode.right = Node;
          break;
        } else {
          //if it has node properties and it is sent by root to right
          //we will make it a right node because it is larger than root node
          currentNumberNode = currentNumberNode.right;
        }
      } else {
        console.log("Try Different Value");
        break;
      }
    }
  }

  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(str) {
    let parsedStr = JSON.parse(str);
    let node = parsedStr.root;
    let bt = new BinaryTree();

    function insert(_node) {
      bt.insert(_node.data);
      if (_node.left) {
        insert(_node.left);
      }
      if (_node.right) {
        insert(_node.right);
      }
    }

    insert(node);

    return bt;
  }
}

function main() {
  const bt = new BinaryTree();
  bt.insert(10);
  bt.insert(2);
  bt.insert(3);
  bt.insert(11);

  const serialized = bt.serialize();
  const deserialized = BinaryTree.deserialize(serialized);

  return (
    serialized === JSON.stringify(deserialized) &&
    BinaryTree.deserialize(serialized).constructor.name === "BinaryTree"
  );
}

main();
