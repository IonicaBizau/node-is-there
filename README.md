[![is-there](http://i.imgur.com/ZHzpvvE.png)](#)

# is-there [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-is-there.svg)](https://travis-ci.org/IonicaBizau/node-is-there/) [![Version](https://img.shields.io/npm/v/is-there.svg)](https://www.npmjs.com/package/is-there) [![Downloads](https://img.shields.io/npm/dt/is-there.svg)](https://www.npmjs.com/package/is-there) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a file or directory exists in a given path.

## Why? `fs.exists` already does the job!

Because `fs.exists` and `fs.existsSync` ~~will be~~ are deprecated and in some cases we still need them!

> `fs.exists()` is an anachronism and exists only for historical reasons. There should almost never be a reason to use it in your own code.
> In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions: another process may remove the file between the calls to `fs.exists()` and `fs.open()`. Just open the file and handle the error when it's not there.
> **`fs.exists()` will be deprecated.**
> <sup>([Source](http://nodejs.org/api/fs.html#fs_fs_exists_path_callback), emphasis added)</sup>

## Installation

```sh
$ npm i --save is-there
```

## Example

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
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`a-csv`](https://github.com/jillix/a-csv) by jillix

 - [`artstack-downloader`](https://github.com/IonicaBizau/artstack-downloader)

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`bowerrc`](https://github.com/mithun/bowerrc#readme) by Mithun Ayachit

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`cecil`](https://github.com/MikeyBurkman/Cecil) by Michael Burkman

 - [`emartech-node-sass-json-importer`](https://github.com/emartech/node-sass-json-importer#readme)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`f-watcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`fontify`](https://github.com/YoussefKababe/fontify#readme) by Youssef Kababe

 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`generator-arwen`](https://github.com/jasonvillalon/generator-arwen) by Jason Villalon

 - [`generator-catena`](https://github.com/damirkusar/catena-generator#readme) by Damir Kusar

 - [`generator-catena-angular-meteor-bootstrap`](https://github.com/damirkusar/generator-catena-angular-meteor-bootstrap#readme) by Damir Kusar

 - [`generator-catena-angular-meteor-material`](https://github.com/damirkusar/catena-generator#readme) by Damir Kusar

 - [`generator-leptir`](https://github.com/damirkusar/leptir-generator#readme) by Damir Kusar

 - [`generator-leptir-angular-bootstrap`](https://github.com/damirkusar/generator-leptir-angular-bootstrap#readme) by Damir Kusar

 - [`generator-leptir-angular-material`](https://github.com/damirkusar/generator-leptir-angular-material#readme) by Damir Kusar

 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)

 - [`git-issues`](https://github.com/softwarescales/git-issues) by Gabriel Petrovay

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`gpm`](https://github.com/IonicaBizau/gpm)

 - [`grunt-md5assets`](https://github.com/p1100i/grunt-md5assets) by peters

 - [`grunt-md5symlink`](https://github.com/p1100i/grunt-md5symlink) by peters

 - [`hal-rc`](https://github.com/gulpsome/hal-rc#readme)

 - [`heroku-docker`](https://github.com/heroku/heroku-docker#readme) by Hunter Loftis

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`jisc_build`](https://github.com/gooii/jisc_build#readme) by Martin Wood-Mitrovski

 - [`le-serf`](https://github.com/le-serf/le-serf#readme) by Nathan McCallum

 - [`low-cli`](https://github.com/lowjs/low-cli#readme) by Jeremy Rylan

 - [`node-dynamo`](https://github.com/louislarry/node-dynamo#readme) by Louis Larry

 - [`node-sass-json-importer`](https://github.com/Updater/node-sass-json-importer#readme)

 - [`npm-interlink`](https://github.com/orlin/npm-interlink#readme) by Orlin M Bozhinov

 - [`panes`](https://github.com/joelchu/panes#readme) by Joel Chu

 - [`parent-search`](https://github.com/IonicaBizau/node-parent-search)

 - [`payname`](https://npmjs.com/package/payname) by Florian CHEVALLIER

 - [`ramda-cli`](https://github.com/raine/ramda-cli#readme) by Raine Virta

 - [`reindex-cli`](https://github.com/reindexio/reindex-cli#readme) by Reindex

 - [`singular_sake`](https://npmjs.com/package/singular_sake) by Juan Castro Fernández

 - [`sourcegate`](https://github.com/orlin/sourcegate#readme) by Orlin M Bozhinov

 - [`sp-load`](https://github.com/pavel06081991/sp-load#readme) by pavel06081991

 - [`tithe`](https://github.com/IonicaBizau/tithe)

 - [`uturi-caching`](https://npmjs.com/package/uturi-caching)

 - [`valkyrja`](https://github.com/freialib/valkyrja#readme) by srcspider

 - [`web-term`](https://github.com/IonicaBizau/web-term)

 - [`zow`](https://github.com/zowley/zow#readme) by Jeremy Rylan

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md