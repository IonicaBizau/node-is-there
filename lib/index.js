"use strict";

const fs = require("fs");

/**
 * isThere
 * Checks if a file or directory exists on given path.
 * Use without the new keyword.
 *
 * @functionisThere
 * @param {String} path The path to the file or directory.
 * @param {Function} callback The callback function called with a boolean value
 * representing if the file or directory exists. If this parameter is not a
 * function, the function will run synchronously and return the value.
 * @return {isThere|Boolean} The `isThere` function if the `callback` parameter
 * was provided, otherwise a boolean value indicating if the file/directory
 * exists or not.
 */
const isThere = (path, callback) => {
    // Async
    if (typeof callback === "function") {
        fs.stat(path, err => {
            callback(!err);
        });
        return isThere;
    }

    // Sync
    try {
        fs.statSync(path);
        return true;
    } catch (err) {
        return false;
    }
};

/**
 * directory
 * Checks if the path exists and it is a directory.
 *
 * @function directory
 * @memberOf isThere
 * @param {String} path The path to the directory.
 * @param {Function} callback The callback function called with a boolean value
 * representing if the directory exists. If this parameter is not a
 * function, the function will run synchronously and return the value.
 * @return {isThere|Boolean} The `isThere` function if the `callback` parameter
 * was provided, otherwise a boolean value indicating if the directory exists or not.
 */
isThere.directory = (path, callback) => {
    // Async
    if (typeof callback === "function") {
        fs.stat(path, (err, stats) => {
            const result = !!(stats && stats.isDirectory());
            callback(result);
        });
        return isThere;
    }

    // Sync
    try {
        return fs.statSync(path).isDirectory();
    } catch (_err) {
        return false;
    }

    return false;
};

/**
 * file
 * Check if the path exists and it is a file.
 *
 * @function file
 * @memberOf isThere
 * @param {String} path The path to the file.
 * @param {Function} callback The callback function called with a boolean value
 * representing if the file exists. If this parameter is not a
 * function, the function will run synchronously and return the value.
 * @return {isThere|Boolean} The `isThere` function if the `callback` parameter
 * was provided, otherwise a boolean value indicating if the file exists or not.
 */
isThere.file = function(path, callback) {
  // Async
  if (typeof callback === "function") {
      fs.stat(path, (err, stats) => {
          const result = !!(stats && stats.isFile());
          callback(result);
      });
      return isThere;
  }

  // Sync
  try {
      return fs.statSync(path).isFile();
  } catch (_err) {
      return false;
  };

  return false;
};

module.exports = isThere;
