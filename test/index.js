// Dependencies
var IsThere = require("../lib")
  , Assert = require("assert")
  ;

// Paths to test
const PATHS = [
    // exist
    ["dir", true]
  , ["dir/another", true]
  , ["dir/another/file", true]
  , ["dir/file", true]
  , ["file", true]
  , ["file.ext", true]
    // don't exist
  , ["foo", false]
  , ["foo/bar", false]
  , ["foo.bar", false]
  , ["foo/bar.foo", false]
].map(function (c) {
    return [__dirname + "/contents/" + c[0], c[1]];
});

// Sync
it("should check the file/directory existence synchronously", function (cb) {
    PATHS.forEach(function (c) {
        Assert.equal(IsThere(c[0]), c[1]);
    });
    cb();
});

// Async
it("should check the file/directory existence asynchronously", function (cb) {
    function doSeq(i) {
        i = i || 0;
        var cPath = PATHS[i];
        if (!cPath) { return cb(); }
        IsThere(cPath[0], function (exists) {
            Assert.equal(exists, cPath[1]);
            doSeq(i + 1);
        });
    }
    doSeq();
});

