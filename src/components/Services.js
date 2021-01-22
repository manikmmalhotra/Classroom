import React from 'react'
export const GetDepartmentCollection = [
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
];

export default function employeeServices(){
const KEYS = {
    employees: "employees",
    employeeId: "employeeId",
}


 function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

 function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, "0")
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

 function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}
}