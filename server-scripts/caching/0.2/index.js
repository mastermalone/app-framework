module.exports.caching = (function () {
  'use strict';
  
  var appcache = require('node-appcache-generator');
  var generator = new appcache.Generator([], [], ['fallback.html']);
  var fs = require('fs');
  var shelljs = require('shelljs');
  
  var Caching = {
    init: function init() {
      
      //var output = generator.generateFromDir('./js', function (a, b) {
      var outputFileList = generator.generateFromDir(['./'], function (error, output) {
        //console.log(output);
        Caching.writeToFile(output);
      });
    },
    setRequestHandler: function setRequestHandler (cf) {
      if (r.url.match(/app\.cache$/)) {
        s.writeHead(200, {'Content-Type': 'text/cache-manifest'});
        return s.end(cf);
      }
    },
    writeToFile: function writeToFile(fileData) {
      var writeStream = {};
      
      console.log('THE output', fileData);
      fs.open('app.cache', 'a+',  function openFile(err, fd) {
        console.log(fd);
        if (err) {
          console.log('The file could not be created or opened');
          return;
        }else {
          //Create or write to file
          writeStream = fs.createWriteStream('app.cache');
          writeStream.on('finish', function finishedWritingToFIle() {
            console.log('The app.cache file has been created and written to.');
          });
          writeStream.write(fileData);
          writeStream.end();
        }
      });
    }
  };
  
  return Caching;
}());
