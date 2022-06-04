const employeeDetails = {
    firstName : 'sunil',
    lastName : 'narasimha',
    firstName1 : 'mounish',
    lastName1 : 'udayagiri',
    gender : 'male',
    id : 24,
    client : 'godrej',
    client1 : 'techsentia'    
}

console.log(`${employeeDetails.firstName} ${employeeDetails.lastName}`);

employeeDetails.firstName = 'konathala';
console.log(`${employeeDetails.firstName} ${employeeDetails.lastName}`);

delete employeeDetails.firstName1;
delete employeeDetails.lastName1;
employeeDetails.workExperience = '5Years';
console.log(employeeDetails);