const fs = require('fs')

const rd1 = fs.readFileSync('1-json.json')
const rd1parse = rd1.toString()
const rd2 = JSON.parse(rd1parse)

rd2.Name = 'Jhin'
rd2.Age = 34

const rd3=JSON.stringify(rd2)

fs.writeFileSync('1-json.json', rd3)

