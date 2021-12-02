const net = require('net');
const request = require('request')
const fs = require('fs')
let input = process.argv.splice(2, process.argv.length - 1)
let localpath = input[1]
let URL = input[0]

const printMessage = (localpath) => {
  const stats = fs.statSync(localpath).size
  console.log(`Downloaded and saved ${stats} to ${localpath}`)
}

const fetcher = (URL, localpath) => {
  request(URL,(err, response, body) => {
    fs.writeFile(localpath, body, err => {
      if (err) {
        console.error(err)
        console.log('statusCode:', response && response.statusCode); 
        return
      }
      printMessage(localpath)
    })
  })
};

fetcher(URL, localpath)

//Remember for later
/*
200: "Everything went great!"
201: "The request has succeeded and a new resource has been created as a result."
404: "Resource was not found."
500: "The server had an error."
*/