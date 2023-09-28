const { readFileSync, writeFileSync, writeFile } = require('fs')


const content = readFileSync('./contents/file1.txt', 'utf-8')
const content2 = readFileSync('./contents/file2.txt', 'utf-8')

writeFileSync('./contents/result.txt', content + content2, { flag: 'a' })
writeFile('./contents/result2.txt', `${content} ${content2}`, { flag: 'a' }, (error, result) => {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})

console.log(content)
console.log(content2)