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
    constructor(node) {
        this.root = node
    }
}