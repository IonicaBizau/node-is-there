const IsThere = require("../lib")
    , Assert = require("assert")

describe('#path', () => {
    before(() => {
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
        ].map((c) => {
            return [__dirname + "/contents/" + c[0], c[1]]
        })
    })

    // Sync
    it("should check the file/directory existence synchronously", cb => {
        PATHS.forEach((c) => {
            Assert.equal(IsThere(c[0]), c[1])
        })
        cb()
    })

    // Async
    it("should check the file/directory existence asynchronously", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere(cPath[0], (exists) => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })

    it("should support promises", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere.promises.exists(cPath[0]).then(exists => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })
})

describe('#directory', () => {
    before(() => {
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
        ].map((c) => {
            return [__dirname + "/contents/" + c[0], c[1]]
        })
    })

    // Sync
    it("should check the directory existence synchronously", cb => {
        PATHS.forEach((c) => {
            Assert.equal(IsThere.directory(c[0]), c[1])
        })
        cb()
    })

    // Async
    it("should check the directory existence asynchronously", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere.directory(cPath[0], (exists) => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })

    it("should support promises", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere.promises.directory(cPath[0]).then(exists => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })
})

describe('#file', () => {
    before(() => {
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
        ].map((c) => {
            return [__dirname + "/contents/" + c[0], c[1]]
        })
    })

    // Sync
    it("should check the file existence synchronously", cb => {
        PATHS.forEach((c) => {
            Assert.equal(IsThere.file(c[0]), c[1])
        })
        cb()
    })

    // Async
    it("should check the file existence asynchronously", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere.file(cPath[0], (exists) => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })

    it("should support promises", cb => {
        function doSeq(i) {
            i = i || 0
            var cPath = PATHS[i]
            if (!cPath) { return cb() }
            IsThere.promises.file(cPath[0]).then(exists => {
                Assert.equal(exists, cPath[1])
                doSeq(i + 1)
            })
        }
        doSeq()
    })
})
