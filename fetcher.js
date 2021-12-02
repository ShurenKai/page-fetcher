const fs = require('fs')
let bytes = 0;

const fetch = (url, localpatj) => {
  process.stdin.write(`Downloaded and saved ${bytes} to ${localpath}`)
}

/*
200: "Everything went great!"
201: "The request has succeeded and a new resource has been created as a result."
404: "Resource was not found."
500: "The server had an error."
*/