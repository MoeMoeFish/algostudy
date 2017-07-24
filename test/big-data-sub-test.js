const sub = require('../src/big-data-sub.js')
const tape = require('tape')

tape('big data sub', function(t) {
  t.equal(sub('2', '1'), '1')
  t.equal(sub('1', '9'), '-8')
  t.equal(sub('11', '19'), '-8')
  t.equal(sub('1000000000', '999999999'), '1')
  t.equal(sub('999999999', '1000000000'), '-1')
  t.end()
} )
