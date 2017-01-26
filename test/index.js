var IsThere = require("../lib")
  , Assert = require("assert")
  , PATHS
  ;

describe('#path', function() {
    before(function() {
        // Paths to test
        PATHS = [
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
});

describe('#directory', function() {
    before(function() {
        // Paths to test
        PATHS = [
            // exist
            ["dir", true]
          , ["dir/another", true]
          , ["dir/another/file", false]
          , ["dir/file", false]
          , ["file", false]
          , ["file.ext", false]
            // don't exist
          , ["foo", false]
          , ["foo/bar", false]
          , ["foo.bar", false]
          , ["foo/bar.foo", false]
        ].map(function (c) {
            return [__dirname + "/contents/" + c[0], c[1]];
        });
    });

    // Sync
    it("should check the directory existence synchronously", function (cb) {
        PATHS.forEach(function (c) {
            Assert.equal(IsThere.directory(c[0]), c[1]);
        });
        cb();
    });

    // Async
    it("should check the directory existence asynchronously", function (cb) {
        function doSeq(i) {
            i = i || 0;
            var cPath = PATHS[i];
            if (!cPath) { return cb(); }
            IsThere.directory(cPath[0], function (exists) {
                Assert.equal(exists, cPath[1]);
                doSeq(i + 1);
            });
        }
        doSeq();
    });
});

describe('#file', function() {
    before(function() {
        // Paths to test
        PATHS = [
            // exist
            ["dir", false]
          , ["dir/another", false]
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
    });

    // Sync
    it("should check the file existence synchronously", function (cb) {
        PATHS.forEach(function (c) {
            Assert.equal(IsThere.file(c[0]), c[1]);
        });
        cb();
    });

    // Async
    it("should check the file existence asynchronously", function (cb) {
        function doSeq(i) {
            i = i || 0;
            var cPath = PATHS[i];
            if (!cPath) { return cb(); }
            IsThere.file(cPath[0], function (exists) {
                Assert.equal(exists, cPath[1]);
                doSeq(i + 1);
            });
        }
        doSeq();
    });
});
