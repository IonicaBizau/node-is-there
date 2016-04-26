## Documentation

You can see below the API reference of this module.

### `IsThere(path, callback)`
Checks if a file or directory exists on given path.

#### Params
- **String** `path`: The path to the file or directory.
- **Function** `callback`: The callback function called with a boolean value representing if the file or directory exists. If this parameter is not a
function, the function will run the synchronously and return the value.

#### Return
- **IsThere|Boolean** The `IsThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the file/directory
exists or not.

