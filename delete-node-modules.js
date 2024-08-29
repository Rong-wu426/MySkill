const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'node_modules');

function deleteDir(directory) {
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach(file => {
      const curPath = path.join(directory, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directory);
  }
}

deleteDir(dir);
console.log('node_modules directory deleted');
