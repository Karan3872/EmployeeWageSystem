const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
const WAGE_PER_HOUR = 20; // You can adjust this value as needed
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// Function to calculate working hours based on employee status
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1:
            return 8; // Full-time hours
        case 2:
            return 4; // Part-time hours
        default:
            return 0; // Absent
    }
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC%-Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
