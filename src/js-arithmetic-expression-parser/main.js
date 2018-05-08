module.exports = function(str) {
    let nodeArray = parse(str)
    let astTree = createAstTree(nodeArray)
    let res = cal(astTree)

    return res
}

class Token {
    constructor(val, type, priority) {
        this.val = val;
        this.type = type; // 0: number, 1: operator
        this.priority = priority // 0: number, 10: + -, 20: * /, 100: - (negative)
    }
}

class Node {
    constructor(val) {
        this.val = val
    }
}

let root
let lastNode
function createAstTree(nodeArray) {
    if (nodeArray && nodeArray.length === 0) {
        return root
    }

    root = nodeArray[0]
    let i = 1
    while(i < nodeArray.length) {
        
    }
}

const numberReg = /^\d+/
const opReg = /^[-\+\*\/]/
const whitespaceReg = /^\s+/

function parse(str) {
    let res = []
    let lastToken

    while(str) {
        let match = str.match(whitespaceReg)
        if (match) {
            str = str.substring(match[0].length, str.length)
            continue
        }

        match = str.match(numberReg)
        if (match) {
            let token = new Token(Number(match[0]), 0, 0)
            res.push(token)
            str = str.substring(match[0].length, str.length)

            lastToekn = token
            continue
        }

        match = str.match(opReg)
        if (match) {
            let op = match[0]
            let priority = getPriority(op)
            let token = new Token(op, 1, getPriority(op))
            str = str.substring(1, str.length)

            lastToken = token
            continue
        }

        break
    }

    return res

    function getPriority(op) {
        if (op === '*' || op === '/') {
            return 20
        } else if (op === '+' || op === '-') {
            return 10
        }
    }
}