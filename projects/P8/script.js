const expenseForm =
document.getElementById("expenseForm");

const expenseList =
document.getElementById("expenseList");

const totalExpense =
document.getElementById("totalExpense");

let expenses = [];

let editIndex = -1;

/* Add / Update Expense */

expenseForm.addEventListener("submit",(e)=>{

e.preventDefault();

const expense = {

amount:Number(
document.getElementById("amount").value
),

category:
document.getElementById("category").value,

description:
document.getElementById("description").value

};

if(editIndex === -1){

expenses.push(expense);

}else{

expenses[editIndex] = expense;

editIndex = -1;

}

renderExpenses();

expenseForm.reset();

});

/* Render Expenses */

function renderExpenses(){

expenseList.innerHTML = "";

let total = 0;

expenses.forEach((expense,index)=>{

total += expense.amount;

const card =
document.createElement("div");

card.classList.add("expense-card");

card.innerHTML = `

<p>
<strong>Amount:</strong>
₹${expense.amount}
</p>

<p>
<strong>Category:</strong>
${expense.category}
</p>

<p>
<strong>Description:</strong>
${expense.description}
</p>

<div class="actions">

<button
class="edit-btn"
onclick="editExpense(${index})">

Edit

</button>

<button
class="delete-btn"
onclick="deleteExpense(${index})">

Delete

</button>

</div>

`;

expenseList.appendChild(card);

});

totalExpense.textContent = `₹${total}`;

}

/* Edit Expense */

function editExpense(index){

const expense =
expenses[index];

document.getElementById("amount").value =
expense.amount;

document.getElementById("category").value =
expense.category;

document.getElementById("description").value =
expense.description;

editIndex = index;

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* Delete Expense */

function deleteExpense(index){

if(confirm("Delete this expense?")){

expenses.splice(index,1);

renderExpenses();

}

}