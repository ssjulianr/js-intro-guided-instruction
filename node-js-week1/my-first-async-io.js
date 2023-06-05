const fs = require('fs');

// Retrieve the file path from the command-line argument
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf-8', (err, fileContent) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Count the number of newlines
  const newlineCount = (fileContent.match(/\n/g) || []).length;

  // Print the number of newlines
  console.log(newlineCount);
});

