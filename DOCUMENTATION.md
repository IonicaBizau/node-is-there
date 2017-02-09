## Documentation

You can see below the API reference of this module.

### `isThere(path, callback)`
Checks if a file or directory exists on given path.
Use without the new keyword.

#### Params
- **String** `path`: The path to the file or directory.
- **Function** `callback`: The callback function called with a boolean value representing if the file or directory exists. If this parameter is not a
function, the function will run synchronously and return the value.

#### Return
- **isThere|Boolean** The `isThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the file/directory
exists or not.

### `directory(path, callback)`
Checks if the path exists and it is a directory.

#### Params
- **String** `path`: The path to the directory.
- **Function** `callback`: The callback function called with a boolean value representing if the directory exists. If this parameter is not a
function, the function will run synchronously and return the value.

#### Return
- **isThere|Boolean** The `isThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the directory exists or not.

### `file(path, callback)`
Check if the path exists and it is a file.

#### Params
- **String** `path`: The path to the file.
- **Function** `callback`: The callback function called with a boolean value representing if the file exists. If this parameter is not a
function, the function will run synchronously and return the value.

#### Return
- **isThere|Boolean** The `isThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the file exists or not.

