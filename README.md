
[![is-there](http://i.imgur.com/ZHzpvvE.png)](#)

# is-there

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-is-there.svg)](https://travis-ci.org/IonicaBizau/node-is-there/) [![Version](https://img.shields.io/npm/v/is-there.svg)](https://www.npmjs.com/package/is-there) [![Downloads](https://img.shields.io/npm/dt/is-there.svg)](https://www.npmjs.com/package/is-there) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a file or directory exists in a given path.

## Why? `fs.exists` already does the job!

Because `fs.exists` and `fs.existsSync` ~~will be~~ are deprecated and in some cases we still need them!

> `fs.exists()` is an anachronism and exists only for historical reasons. There should almost never be a reason to use it in your own code.
> In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to `fs.exists()` and `fs.open()`. Just open the file and handle the error when it's not there.
> **`fs.exists()` will be deprecated.**
> <sup>([Source](http://nodejs.org/api/fs.html#fs_fs_exists_path_callback), emphasis added)</sup>


## :cloud: Installation

```sh
$ npm i --save is-there
```


## :clipboard: Example



```js
// Dependencies
var IsThere = require("is-there");

// Paths to test
var paths = [
    // exist
    "dir"
  , "dir/another"
  , "dir/another/file"
  , "dir/file"
  , "file"
  , "file.ext"
    // don't exist
  , "foo"
  , "foo/bar"
  , "foo.bar"
  , "foo/bar.foo"
].map(function (c) {
    return __dirname + "/contents/" + c;
});

// Sync
console.log("> Testing sync method.");
paths.forEach(function (c) {
    console.log("> %s %s", c, IsThere(c) ? "exists" : "doesn't exist");
});


console.log("> Testing async method.");
function doSeq(i) {
    i = i || 0;
    var cPath = paths[i];
    if (!cPath) { return; }
    IsThere(cPath, function (exists) {
        console.log("> %s %s", cPath, exists ? "exists" : "doesn't exist");
        doSeq(i + 1);
    });
}

doSeq();
```

## :memo: Documentation


### `IsThere(path, callback)`
Checks if a file or directory exists on given path.

#### Params
- **String** `path`: The path to the file or directory.
- **Function** `callback`: The callback function called with a boolean value representing if the file or directory exists. If this parameter is not a
function, the function will run the synchronously and return the value.

#### Return
- **IsThere|Boolean** The `IsThere` function if the `callback` parameter was provided, otherwise a boolean value indicating if the file/directory
exists or not.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
