const os = require('os')
const path = require('path')

console.log("user ", os.userInfo())

const filePath = path.join('/content', 'subfolder', 'file1.txt')
console.log(filePath)

console.log(path.basename(filePath))
console.log(path.resolve(__filename))