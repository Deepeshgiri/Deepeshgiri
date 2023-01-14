 const fs = require('fs')
// const book ={
//     title: 'ego is the enemy',
//     author: 'deepesh'
// }
// const bookJSON=JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)
//fs.readFileSync('1-json.json')
// const dataBuffer =fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
//const user = JSON.parse(dataJSON)
const data = JSON.parse(dataJSON)

data.name = "deepesh",
data.age =74
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-js0n.json', userJSON)
console.log(data)