const fs = require('fs');
const path = require('path');

function filterFilesByExtension(directory, extension) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    
    const filteredFiles = files.filter(file => path.extname(file) === extension);
    
    if (filteredFiles.length > 0) {
      console.log(`Files with the extension '${extension}' in directory '${directory}':`);
      filteredFiles.forEach(file => console.log(file));
    } else {
      console.log(`No files with the extension '${extension}' found in directory '${directory}'.`);
    }
  });
}

if (process.argv.length < 4) {
  console.log('Please provide a directory name and file extension as command-line arguments.');
} else {
  const directory = process.argv[2];
  const extension = process.argv[3];
  filterFilesByExtension(directory, extension);
}
