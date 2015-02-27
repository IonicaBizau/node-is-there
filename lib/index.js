// Dependencies
var Fs = require("fs");

/*!
 * checkErr
 * Checks if the error is because the file doesn't exist.
 *
 * @name checkErr
 * @function
 * @param {Error|null} err The error value.
 * @return {Boolean} A boolean representing if the file exists or not.
 */
function checkErr(err) {
    return err && err.code === "ENOENT" ? false : true;
}

/**
 * IsThere
 * Checks if a file or directory exists on given path.
 *
 * @name IsThere
 * @function
 * @param {String} path The path to the file or directory.
 * @param {Function} callback The callback function called with a boolean value representing if the file or directory exists.
 * @return {IsThere} The `IsThere` function.
 */
function IsThere(path, callback) {
    Fs.stat(path, function (err) {
        callback(checkErr(err));
    });
}

/**
 * sync
 * The sync version of `IsThere`.
 *
 * @name sync
 * @function
 * @param {String} path The path to the file or directory.
 * @return {Boolean} A boolean value representing if the file or directory exists.
 */
IsThere.sync = function (path) {
    try {
        Fs.statSync(path);
        return true;
    } catch (err) {
        return checkErr(err);
    };
};

module.exports = IsThere;
