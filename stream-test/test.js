const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname,'data.txt')
const fileName2 = path.resolve(__dirname,'data-bak.txt')

const readStream = fs.createReadStream(fileName1)
const writStream = fs.createWriteStream(fileName2)

readStream.pipe(writStream)
readStream.on('end',()=>{
  console.log(['拷贝完成']);
  
})