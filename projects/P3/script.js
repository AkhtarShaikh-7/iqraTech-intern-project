const budgetType =
document.getElementById("budgetType");

const budgetAmount =
document.getElementById("budgetAmount");

const amountSpent =
document.getElementById("amountSpent");

const remainingBalance =
document.getElementById("remainingBalance");

const form =
document.getElementById("budgetForm");

const tableBody =
document.getElementById("budgetTableBody");

let budgets = [];

/* Budget Selection */

budgetType.addEventListener("change", () => {

    budgetAmount.value =
    budgetType.value;

    calculateBalance();

});

/* Amount Spent */

amountSpent.addEventListener("input", () => {

    calculateBalance();

});

/* Balance Calculation */

function calculateBalance(){

    const budget =
    Number(budgetAmount.value);

    const spent =
    Number(amountSpent.value);

    const balance =
    budget - spent;

    remainingBalance.value =
    `₹${balance}`;

}

/* Submit */

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const subject =
    document.getElementById("subject").value;

    const budget =
    Number(budgetAmount.value);

    const spent =
    Number(amountSpent.value);

    const balance =
    budget - spent;

    if(balance < 0){

        alert(
        "Remaining balance cannot be negative!"
        );

        return;
    }

    const existingIndex =
    budgets.findIndex(item =>
        item.subject.toLowerCase()
        === subject.toLowerCase()
    );

    const budgetData = {

        subject,
        budget,
        spent,
        balance

    };

    if(existingIndex !== -1){

        budgets[existingIndex] =
        budgetData;

    }else{

        budgets.push(budgetData);

    }

    renderTable();

    form.reset();

    budgetAmount.value = "";
    remainingBalance.value = "";

});

/* Render Table */

function renderTable(){

    tableBody.innerHTML = "";

    budgets.forEach((item,index)=>{

        const row =
        document.createElement("tr");

        row.innerHTML = `

        <td>${item.subject}</td>

        <td>₹${item.budget}</td>

        <td>₹${item.spent}</td>

        <td>₹${item.balance}</td>

        <td>

        <button
        class="${
            item.balance === 0
            ? 'disabled-btn'
            : 'edit-btn'
        }"

        ${
            item.balance === 0
            ? 'disabled'
            : ''
        }

        onclick="editBudget(${index})">

        ${
            item.balance === 0
            ? 'Locked'
            : 'Edit'
        }

        </button>

        </td>

        `;

        tableBody.appendChild(row);

    });

}

/* Edit */

function editBudget(index){

    const item =
    budgets[index];

    document.getElementById("subject").value =
    item.subject;

    budgetType.value =
    item.budget;

    budgetAmount.value =
    item.budget;

    amountSpent.value =
    item.spent;

    remainingBalance.value =
    `₹${item.balance}`;

}