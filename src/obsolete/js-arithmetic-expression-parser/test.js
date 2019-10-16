const tape = require('tape')
const algo = require('./main')

tape('javascript arithmetic expression parser', (t) => {
    t.equal(algo('1 + 2'), 3)
    t.equal(algo('1 + 2 * 3'), 7)
    t.equal(algo('1 + 2 * 10 / 5'), 5)
    t.equal(algo('1 + 2 * 10 / 5 - 3'), 2)
    t.end()
})