'use strict'

function setup() {

    let tree = new Tree()
    
    // Add 10 random values to the Tree struct
    for(let i = 0; i < 10; i++) {
        tree.AddValue(floor(random(0, 100)))
    }

    console.log(tree)

    // Visiting all nodes
    tree.Traverse()
}