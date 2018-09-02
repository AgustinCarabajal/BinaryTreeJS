'use strict'

// Tree struct
const Tree = function() {
  this.root = null
}

// Add in order a new Node inside the Tree
Tree.prototype.AddValue = function (val) {
  var node = new Node(val)

  if (!this.root) {
    this.root = node
    this.root.x = width / 2
    this.root.y = 20
  } else {
    this.root.AddNode(node)
  }
}

// Visit all Nodes
Tree.prototype.Traverse = function() {
  this.root.Visit(this.root)
}

// Search a single value in the Tree
Tree.prototype.Search = function(val) {
  return this.root.Search(val)
}
