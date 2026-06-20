const customerType =
document.getElementById("customerType");

const amountContainer =
document.getElementById("amountContainer");

const form =
document.getElementById("customerForm");

const newCustomers =
document.getElementById("newCustomers");

const existingCustomers =
document.getElementById("existingCustomers");

customerType.addEventListener("change", () => {

    if(customerType.value === "existing"){
        amountContainer.style.display = "block";
    }
    else{
        amountContainer.style.display = "none";
    }

});

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const type =
    customerType.value;

    const amount =
    document.getElementById("amount").value;

    if(type === "new"){
        addNewCustomer(name, email);
    }
    else{
        addExistingCustomer(name, email, amount);
    }

    form.reset();

    amountContainer.style.display = "none";

});

function addNewCustomer(name, email){

    const card =
    document.createElement("div");

    card.classList.add("customer-card");

    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <button class="approve-btn">
            Approve Customer
        </button>
    `;

    card
    .querySelector(".approve-btn")
    .addEventListener("click", () => {

        addExistingCustomer(
            name,
            email,
            0
        );

        card.remove();

    });

    newCustomers.appendChild(card);

}

function addExistingCustomer(
    name,
    email,
    amount
){

    const card =
    document.createElement("div");

    card.classList.add("customer-card");

    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Amount:</strong> ₹${amount}</p>

        <button class="remove-btn">
            Remove
        </button>
    `;

    card
    .querySelector(".remove-btn")
    .addEventListener("click", () => {

        card.remove();

    });

    existingCustomers.appendChild(card);

}