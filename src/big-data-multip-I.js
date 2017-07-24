// 分治法解决大叔相乘
// http://cnn237111.blog.51cto.com/2359144/1201901
let add = require('./big-data-real-add.js')
let sub = require('./big-data-read-sub.js')

const multip = function(num1, num2) {
  if (num1.length + num2.length < 16) {
    return parseInt(num1) * parseInt(num2)
  }

  let n = Math.max(num1.length, num2.length)
  n = Math.ceil(n / 2)

}

// num1, num2 is array
const multipInner = function(num1, num2) {
}


module.exports = multip
