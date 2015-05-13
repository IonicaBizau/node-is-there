![](http://i.imgur.com/ZHzpvvE.png)

# is-there
Check if a file or directory exists in a given path.

## Why? `fs.exists` already does the job!
Because `fs.exists` and `fs.existsSync` will be deprecated and I still like and need them!

> `fs.exists()` is an anachronism and exists only for historical reasons. There should almost never be a reason to use it in your own code.

> In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to `fs.exists()` and `fs.open()`. Just open the file and handle the error when it's not there.

> **`fs.exists()` will be deprecated.**

> <sup>([Source](http://nodejs.org/api/fs.html#fs_fs_exists_path_callback), emphasis added)</sup>

## Installation
```sh
$ npm install is-there
```

## Example
```js
// Dependencies
var IsThere = require("is-there");

// Async call
IsThere("path/to/the/file/or/directory", function (exists) {
    if (exists) {
        // do something if it exists
    } else {
        // do something if it doesn't exist
    }
});

// Sync call (without providing the callback function)
var exists = IsThere("path/to/the/file/or/directory");
if (exists) {
    // do something if it exists
} else {
    // do something if it doesn't exist
}
```

## Documentation
### `IsThere(path, callback)`
Checks if a file or directory exists on given path.

#### Params
- **String** `path`: The path to the file or directory.
- **Function** `callback`: The callback function called with a boolean value representing if the file or directory exists. If this parameter is not a
function, the function will run the synchronously and return the value.

#### Return
- **IsThere|Boolean** The `IsThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the file/directory
exists or not.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
