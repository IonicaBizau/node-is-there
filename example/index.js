// Dependencies
var IsThere = require("../lib");

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
