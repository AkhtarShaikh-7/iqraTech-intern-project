const employeeForm =
document.getElementById("employeeForm");

const employeeTable =
document.getElementById("employeeTable");

const searchInput =
document.getElementById("searchInput");

let employees = [];

let editIndex = -1;

/* Add / Update Employee */

employeeForm.addEventListener("submit",(e)=>{

e.preventDefault();

const employee = {

name:
document.getElementById("name").value,

age:
document.getElementById("age").value,

email:
document.getElementById("email").value,

department:
document.getElementById("department").value

};

if(editIndex === -1){

employees.push(employee);

}else{

employees[editIndex] = employee;

editIndex = -1;

}

renderTable(employees);

employeeForm.reset();

});

/* Render Table */

function renderTable(data){

employeeTable.innerHTML = "";

data.forEach((employee,index)=>{

const row =
document.createElement("tr");

row.innerHTML = `

<td>${employee.name}</td>

<td>${employee.age}</td>

<td>${employee.email}</td>

<td>${employee.department}</td>

<td>

<button
class="edit-btn"
onclick="editEmployee(${index})">

Edit

</button>

<button
class="delete-btn"
onclick="deleteEmployee(${index})">

Delete

</button>

</td>

`;

employeeTable.appendChild(row);

});

}

/* Edit Employee */

function editEmployee(index){

const employee =
employees[index];

document.getElementById("name").value =
employee.name;

document.getElementById("age").value =
employee.age;

document.getElementById("email").value =
employee.email;

document.getElementById("department").value =
employee.department;

editIndex = index;

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* Delete Employee */

function deleteEmployee(index){

if(confirm("Delete this employee?")){

employees.splice(index,1);

renderTable(employees);

}

}

/* Search Employee */

searchInput.addEventListener("input",()=>{

const searchValue =
searchInput.value.toLowerCase();

const filteredEmployees =
employees.filter(employee =>

employee.name
.toLowerCase()
.includes(searchValue)

||

employee.age
.toString()
.includes(searchValue)

||

employee.email
.toLowerCase()
.includes(searchValue)

||

employee.department
.toLowerCase()
.includes(searchValue)

);

renderTable(filteredEmployees);

});