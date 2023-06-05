const express = require('express');
const employeesData = require('./employees.json');

const app = express();

// Endpoint to get all employees
app.get('/employees', (req, res) => {
  res.json(employeesData.employees);
});

// Endpoint to get an employee by ID
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the employee with the matching ID
  const employee = employeesData.employees.find(
    (employee) => employee.employeeID === id
  );

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
