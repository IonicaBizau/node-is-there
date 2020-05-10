const IsThere = require("../lib");

// Sync
console.log(IsThere(`${__dirname}/contents/file`))
// => true
console.log(IsThere.directory(`${__dirname}/contents/dir`))

// Callback
IsThere.file(`${__dirname}/contents/not_found`, exists => {
    console.log(exists)
    // => false
})

// Promises
IsThere.promises.directory(`${__dirname}/contents/dir`).then(exists => {
    console.log(exists)
    // => true
}).catch(console.error)
