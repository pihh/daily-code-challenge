class Node {
  constructor(data, depth) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.depth = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  get transverse() {
    let _root = this.root;
    return {
      level: {
        breath(node, cb) {
          let current = [_root];
          const result = [];
          while (current.length > 0) {
            var next = [];
            for (var node of current) {
              //cb(node);
              result.push({ data: node.data, depth: node.depth });
              if (node.left) next.push(node.left);
              if (node.right) next.push(node.right);
            }
            current = next;
          }
          return result;
        }
      },
      depth: {
        // ORDER MATTERS - Parent Left Rigth
        // P L R
        preOrder() {
          const result = [];
          const action = root => {
            if (null !== root) {
              result.push(root.data);
              action(root.left);
              action(root.right);
            }
          };
          action(_root);
          return result;
        },
        // L P R
        inOrder() {
          const result = [];
          const action = root => {
            if (root !== null) {
              action(root.left);
              result.push([root.data, root.depth]);
              action(root.right);
            }
          };
          action(_root);
          return result;
        },
        // L R P
        postOrder() {
          const result = [];

          const action = root => {
            if (root !== null) {
              action(root.left);
              action(root.right);
              result.push(root.data);
            }
          };
          action(_root);
          return result;
        }
      }
    };
  }
  insert(data) {
    let node = new Node(data, 0);
    if (this.root === null) {
      this.root = node;
    } else {
      const insert = (root, node) => {
        node.depth++;
        const action = (root, node, where) => {
          if (null === root[where]) {
            root[where] = node;
          } else {
            insert(root[where], node);
          }
        };
        if (node.data > root.data) action(root, node, "right");
        if (node.data < root.data) action(root, node, "left");
      };
      insert(this.root, node);
    }
  }
}

(() => {
  const bst = new BST();
  bst.insert(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(7);

  return bst.transverse.level.breath();
})();
