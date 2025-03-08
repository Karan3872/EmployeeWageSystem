const NUM_OF_WORKING_DAYS = 2;
const WAGE_PER_HOUR = 20; // Define the hourly wage rate
let empHrs = 0;

// Function to determine working hours based on empCheck
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 0:
            return 0;  // Employee is absent
        case 1:
            return 4;  // Employee works part-time
        case 2:
            return 8;  // Employee works full-time
        default:
            return 0;
    }
}

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs : " + empHrs + " Emp Wage: " + empWage);
