function swapNodes(indexes, queries) {
  class Node {
    constructor(data, depth) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.depth = depth;
    }
  }

  let response = [];

  const queriesLen = queries.length;
  const indexesLen = indexes.length;
  const nodes = [new Node(1, 1)];

  function createNode(value, root, position) {
    if (value > -1) {
      const depth = root.depth + 1;
      const node = new Node(value, depth);
      root[position] = node;
      nodes.push(node);
    }
  }

  function swapNode(k) {
    const temp = nodes[k].left;
    nodes[k].left = nodes[k].right;
    nodes[k].right = temp;
  }

  function inOrder(_root) {
    const result = [];
    const action = root => {
      if (root !== null) {
        action(root.left);
        result.push(root.data);
        action(root.right);
      }
    };
    action(_root);
    return result;
  }

  for (let i = 0; i < indexesLen; i++) {
    createNode(indexes[i][0], nodes[i], "left");
    createNode(indexes[i][1], nodes[i], "right");
  }

  for (let i = 0; i < queriesLen; i++) {
    const jump = queries[i];
    for (let k = 0; k < nodes.length; k++) {
      const node = nodes[k];
      if (0 === node.depth % jump) {
        //console.log('swapNode', node.data), jump;
        swapNode(k);
      }
    }
    response.push(inOrder(nodes[0]));
  }
  return response;
}

swapNodes(
  [
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ],
  [2, 4]
);
