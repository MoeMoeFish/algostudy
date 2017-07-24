let tape = require('tape')
let sub = require('../src/big-data-real-sub.js')

tape('big data real sub', function(t) {
  t.equal(sub('1', '99'), '-98')
  t.equal(sub('-1', '99'), '-100')
  t.equal(sub('1', '-99'), '100')
  t.equal(sub('-1', '-99'), '98')
  t.end()
})
