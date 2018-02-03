var fs = require('fs-extra');
var path = require('path');

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getDirectories(filePath) {
  return fs.readdirSync(filePath)
    .filter(function(file) {
      return fs.statSync(path.join(filePath, file)).isDirectory();
    });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, function (error) {
    if (error) throw error;
    callback && callback();
  });
}


function getFiles(filepath) {
  return fs.readdirSync(filepath)
    .filter(function(file) {
      return fs.statSync(path.join(filepath, file)).isFile();
    });
}

module.exports = {
  readFile,
  getFiles,
  writeFile,
  getDirectories
};