//

const fs = require('fs');

// Read the planets from the text file
fs.readFile('solarSystem.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }

  // Split the data by newlines to get an array of planet names
  const planets = data.split('\n');

  // Print the planets to the console
  planets.forEach((planet) => console.log(planet));
});
