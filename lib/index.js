// Dependencies
var Fs = require("fs");

var IsThere = (function() {
  /**
   * IsThere
   * Checks if a file or directory exists on given path.
   * Use without the new keyword.
   *
   * @class IsThere
   * @param {String} path The path to the file or directory.
   * @param {Function} callback The callback function called with a boolean value
   * representing if the file or directory exists. If this parameter is not a
   * function, the function will run synchronously and return the value.
   * @return {IsThere|Boolean} The `IsThere` function if the `callback` parameter
   * was provided, otherwise a boolean value indicating if the file/directory
   * exists or not.
   */

  var IsThere = function(path, callback) {
      // Async
      if (typeof callback === "function") {
          Fs.stat(path, function (err) {
              callback(!err);
          });
          return IsThere;
      }

      // Sync
      try {
          Fs.statSync(path);
          return true;
      } catch (err) {
          return false;
      };
  }
  /**
   * @function directory
   * @memberOf IsThere
   * @param {String} path The path to the directory.
   * @param {Function} callback The callback function called with a boolean value
   * representing if the directory exists. If this parameter is not a
   * function, the function will run synchronously and return the value.
   * @return {IsThere|Boolean} The `IsThere` function if the `callback` parameter
   * was provided, otherwise a boolean value indicating if the directory exists or not.
   *
   */
  IsThere.directory = function(path, callback) {
      // Async
      if (typeof callback === "function") {
          Fs.stat(path, function (err, stats) {
              var result = !!(stats && stats.isDirectory());

              callback(result);
          });
          return IsThere;
      }

      // Sync
      try {
          if (Fs.statSync(path)) {
              return Fs.statSync(path).isDirectory();
          }
      } catch (_err) {
          return false;
      };

      return false;
  },
  /**
   * @function file
   * @memberOf IsThere
   * @param {String} path The path to the file.
   * @param {Function} callback The callback function called with a boolean value
   * representing if the file exists. If this parameter is not a
   * function, the function will run synchronously and return the value.
   * @return {IsThere|Boolean} The `IsThere` function if the `callback` parameter
   * was provided, otherwise a boolean value indicating if the file exists or not.
   *
   */

  IsThere.file = function(path, callback) {
      // Async
      if (typeof callback === "function") {
          Fs.stat(path, function (err, stats) {
              var result = !!(stats && stats.isFile());

              callback(result);
          });
          return IsThere;
      }

      // Sync
      try {
          if (Fs.statSync(path)) {
              return Fs.statSync(path).isFile();
          }
      } catch (_err) {
          return false;
      };

      return false;
  }

  return IsThere;
})();

module.exports = IsThere;
