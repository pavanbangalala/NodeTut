
const names = require('./2-names')
const utils = require('./3-utils')
const { john, cities, person } = require('./4-alternative-flavor')
console.log(names)
console.log(utils)

// sayHi(john)
// sayHi(peter)
// sayHi(secret_name)
utils.sayHi(names.john)

console.log(john)
console.log(cities)
console.log(person)
