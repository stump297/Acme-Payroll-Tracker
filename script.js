// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];

const collectEmployee = function() {
  const firstName = prompt( "Enter Employee First Name" )
  const lastName = prompt( "Enter Employee Last Name" )
  let salary = undefined
  let salaryIsNumber = false
  while (!salaryIsNumber){
    salary = prompt( "Enter Employee Salary" )
    salaryIsNumber = !isNaN (salary)
  } 
  const employee = {
    firstName,
    lastName,
    salary: +salary
  }
  return employee;
}


// Collect employee data
const collectEmployees = function() {
  
    
  let addMore = true
  while (addMore){
    const employee = collectEmployee();
    employeeArray.push (employee)
    addMore = confirm("Add Another Employee?");
    
   
  } 
  return employeeArray;

  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  const employeeCount = employeesArray.length;
  let totalSalary = 0
  employeesArray.forEach(employee => {
    console.log(employee);
    totalSalary = totalSalary + employee.salary;
  });

  const averageSalary = totalSalary / employeeCount;
  console.log ("Average Salary");
  console.log (averageSalary);

  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  let randomName = employeeArray[~~(Math.random() * employeeArray.length)];
  
  console.log ("Random Employee");
  console.log (randomName);

  
 } 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
