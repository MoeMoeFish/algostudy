let add = require('./big-data-add.js')
let sub = require('./big-data-sub.js')

let realAdd = function(str1, str2) {
  let sign1 = str1.length === 0 || str1[0] != '-' 
  let sign2 = str2.length === 0 || str2[0] != '-' 

  if (sign1 && sign2) {
    return add(str1, str2)
  } else if (sign1 && !sign2) {
    let str2n = str2.substr(1, str2.length - 1)
    return sub(str1, str2n)
  } else if (!sign1 && sign2) {
    let str1n = str1.substr(1, str1.length - 1)
    return sub(str2, str1n)
  } else {
    let str1n = str1.substr(1, str1.length - 1)
    let str2n = str2.substr(1, str2.length - 1)
    let rv = add(str1n, str2n)
    return '-' + rv
  }
}

module.exports = realAdd
