const add = function(str1, str2) {
  let len1 = str1.length
  let len2 = str2.length

  if (len1 === 0) {
    return str2
  } else if (len2 === 0) {
    return str1
  }

  let len = Math.max(len1, len2)

  let i1 = len1 - 1
  let i2 = len2 - 1
  let carry = 0
  let rv = []

  while (i1 >= 0 || i2 >= 0 || carry != 0) {
    let num1 = 0
    if (i1 >= 0) {
      num1 = parseInt(str1[i1])
    }

    let num2 = 0
    if (i2 >= 0) {
      num2 = parseInt(str2[i2])
    }

    let num = num1 + num2 + carry
    if (num > 9) {
      num = num % 10
      carry = 1
    } else {
      carry = 0
    }

    rv.unshift(num)

    i1--
    i2--
  }
  

  var rvStr = rv.join('')
  return rvStr
}

module.exports = add
