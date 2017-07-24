const add = require('../src/big-data-add.js')
const tape = require('tape')

tape('big data add', function(t) {
  t.equal(add('1', '2'), '3')
  t.equal(add('1', '9'), '10')
  t.equal(add('1', '999999999'), '1000000000')
  t.end()
} )

