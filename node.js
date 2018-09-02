'use strict'

// Node struct
const Node = function(val) {
  
  this.value = val
  this.left = null
  this.right = null
}

// Add a new Node
Node.prototype.AddNode = function(n) {
  
  if (n.value > this.value) {
    if (!this.right) {
      this.right = n
    } else {
      this.right.AddNode(n)
    }
  } else

  if (n.value < this.value) {
    if (!this.left) {
      this.left = n
    } else {
      this.left.AddNode(n)
    }
  }
}

// Visit all Nodes recursively
Node.prototype.Visit = function() {
  
  if (this.left) {
    this.left.Visit()
  }
  
  console.log(this.value)

  if (this.right) {
    this.right.Visit()
  }
}