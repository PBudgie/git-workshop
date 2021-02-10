class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    setLeft(node) {
        this.left = node
    }

    setRight(node) {
        this.right = node
    }
}

class Tree {
    //EGG: Congrats! You found an egg! Type a smiley in the Zoom chat :)

    constructor(node) {
        this.root = node
    }
}