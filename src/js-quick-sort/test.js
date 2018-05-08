const tape = require('tape')
const algo = require('./main')

tape('quick sort', (t) => {
    t.deepEqual(algo([3,1,3,2]), [1,2,3,3])
    t.end()
})