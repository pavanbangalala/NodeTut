const _ = require('lodash')

const deepArray = [1, [2, [3, [4]]]]

const flatArray = _.flattenDeep(deepArray)
console.log(flatArray)