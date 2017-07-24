let tape = require('tape')
let add = require('../src/big-data-real-add.js')

tape('big data real add', function(t) {
  t.equal(add('1', '99'), '100')
  t.equal(add('-1', '99'), '98')
  t.equal(add('1', '-99'), '-98')
  t.equal(add('-1', '-99'), '-100')

  t.end()
})
