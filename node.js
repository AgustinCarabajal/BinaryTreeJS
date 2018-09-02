'use strict'

// Node struct
const Node = function(val, x, y) {
  
  this.value = val
  this.left = null
  this.right = null
  this.x = x
  this.y = y
}

// Add a new Node
Node.prototype.AddNode = function(n) {
  
  if (n.value > this.value) {
    if (!this.right) {
      this.right = n
      this.right.x = this.x + 50
      this.right.y = this.y + 20
    } else {
      this.right.AddNode(n)
    }
  } else

  if (n.value < this.value) {
    if (!this.left) {
      this.left = n
      this.left.x = this.x - 50
      this.left.y = this.y + 20
    } else {
      this.left.AddNode(n)
    }
  }
}

// Visit all Nodes recursively
Node.prototype.Visit = function(parent) {
  
  if (this.left) {
    this.left.Visit(this)
  }
  
  console.log(this.value)
  fill(255)
  noStroke()
  text(this.value, this.x, this.y)
  stroke(255)
  line(parent.x, parent.y, this.x, this.y)

  if (this.right) {
    this.right.Visit(this)
  }
}

Node.prototype.Search = function(val) {
  if (val === this.value) {
    return this
    // console.log('Found ', val)
  } else

  if (val < this.value && this.left) {
    return this.left.Search(val)
  } else

  if (val > this.value && this.right) {
    return this.right.Search(val)
  } else {
    return null
    // console.log('Value not found: ', val)
  }
}