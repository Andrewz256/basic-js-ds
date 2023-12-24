const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 
  constructor() {
    this.head = null;
    this.right = null;
    this.left = null;
    this.length = 0;
  }
  root() {

    return this.head;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
    } else {

      // let current = this.head;
      // while(current.next) {
      //     current = current.next;
      // }
      // current.next = new Node(data);
      const searchTree = node => {
        if (data < node.data) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        }
        else if (data > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }

      }
    }
    this.length++;
  }


  has(/* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   }

  find(/* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.head = this.removeNode(this.head, data);
  }

  removeNode(node, key)
  {

      if(node === null)
          return null;
      else if(key < node.data)
      {
          node.left = this.removeNode(node.left, key);
          return node;
      }
      else if(key > node.data)
      {
          node.right = this.removeNode(node.right, key);
          return node;
      }
      else
      {
          if(node.left === null && node.right === null)
          {
              node = null;
              return node;
          }
          if(node.left === null)
          {
              node = node.right;
              return node;
          }
           
          else if(node.right === null)
          {
              node = node.left;
              return node;
          }
          var aux = this.findMinNode(node.right);
          node.data = aux.data;
   
          node.right = this.removeNode(node.right, aux.data);
          return node;
      }
    }
  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};