const sub = function(str1, str2) {
  let len1 = str1.length
  let len2 = str2.length

  if (len2 === 0) {
    return str1
  } else if (len1 === 0) {
    if (len2 === 0) {
      return str2
    } else {
      return '-' + str2
    }
  }

  let len = Math.max(len1, len2)

  let i1 = len1 - 1
  let i2 = len2 - 1
  let carry = 0
  let flag = 0
  let rv = []
  let sign = ''
  let buff = []

  if (len1 < len2) {
    sign = '-'
    flag = 1
  } else if (len1 === len2) {
    for(let i = 0;i < len;i++) {
      let n1 = str1[i]
      let n2 = str2[i]

      if (n1 < n2) {
        sign = '-'
        flag = 1
        break
      }
    }
  } 

  while (i1 >= 0 || i2 >= 0) {
    let num1 = 0
    if (i1 >= 0) {
      num1 = parseInt(str1[i1])
    }

    let num2 = 0
    if (i2 >= 0) {
      num2 = parseInt(str2[i2])
    }

    let num = 0
    
    if (flag) {
      num = num2 - num1 - carry
    } else {
      num = num1 - num2 - carry
    }
    if (num < 0) {
      num = num + 10
      carry = 1
    } else {
      carry = 0
    }

    buff.unshift(num) 
    if (num > 0) {
      rv.unshift(buff)
      buff = []
    }

    i1--
    i2--
  }

  var rvStr = sign + rv.join('')
  return rvStr

}

module.exports = sub
