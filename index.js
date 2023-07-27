// Write your solution in this file!
const employee = {address: "Broke Blvd", name: "Chandler"}

employee 
    
employee.lastName = "Abril"

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value})
    return employee}
{second[key] = value}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    (employee[key] = value)
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}

    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployee(employee, key) {
    const newObj = {employee}

    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee
}

