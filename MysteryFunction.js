import Node from './Tree'

function whatAmI(expression) {
    var operatorStack = []
    var nodeQueue = []

    for(var i = 0; i < expression.length; i++) {
        if(['+','*'].includes(expression.charAt(i))) {
            while(operatorStack.length > 0 && ['+','*'].includes(operatorStack[operatorStack.length-1])) {
                var operatorNode = new Node(operatorStack.pop())
                var rightNode = nodeQueue.pop()
                var leftNode = nodeQueue.pop()
                operatorNode.setLeft(leftNode)
                operatorNode.setRight(rightNode)
                nodeQueue.push(operatorNode)
            }
            operatorStack.push(expression.charAt(i))
        } else if(/[1-9]{1}/.test(expression.charAt(i))) {
            var newNode = new Node(expression.charAt(i))
            nodeQueue.push(newNode)
        } else if(expression.charAt(i) == "(") {
            operatorStack.push("(")
        } else if(expression.charAt(i) == ")") {
            while(operatorStack[operatorStack.length-1] != "(") {
                var operatorNode = new Node(operatorStack.pop())
                var rightNode = nodeQueue.pop()
                var leftNode = nodeQueue.pop()
                operatorNode.setLeft(leftNode)
                operatorNode.setRight(rightNode)
                nodeQueue.push(operatorNode)
            }
            operatorStack.pop() //Pops the left parens off the stack
        }
    }

    while(operatorStack.length > 0) {
        var operatorNode = new Node(operatorStack.pop())
        var rightNode = nodeQueue.pop()
        var leftNode = nodeQueue.pop()
        operatorNode.setLeft(leftNode)
        operatorNode.setRight(rightNode)
        nodeQueue.push(operatorNode)
    }

    //EGG: Congrats! You've found an egg! Bonus points if you can figure out what this function is doing. Guess in the Zoom chat!

    return nodeQueue.pop() //Returns the last node on the queue which is the root of the tree
}