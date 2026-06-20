const form =
document.getElementById("registrationForm");

const country =
document.getElementById("country");

const currency =
document.getElementById("currency");

const currencyMap = {

India:"INR",
USA:"USD",
UK:"GBP",
Japan:"JPY",
UAE:"AED"

};

/* Country Selection */

country.addEventListener("change",()=>{

currency.value =
currencyMap[country.value] || "";

});

/* Validation Functions */

function validateName(){

const name =
document.getElementById("fullName").value.trim();

if(name === ""){

document.getElementById("nameError")
.textContent =
"Full name is required";

return false;

}

document.getElementById("nameError")
.textContent = "";

return true;

}

function validatePassword(){

const password =
document.getElementById("password").value;

const regex =
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

if(!regex.test(password)){

document.getElementById("passwordError")
.textContent =
"Password must contain 6+ chars, number & special character";

return false;

}

document.getElementById("passwordError")
.textContent = "";

return true;

}

function validatePhone(){

const phone =
document.getElementById("phone").value;

const regex =
/^[0-9]+$/;

if(!regex.test(phone)){

document.getElementById("phoneError")
.textContent =
"Only digits are allowed";

return false;

}

document.getElementById("phoneError")
.textContent = "";

return true;

}

function validateEmail(){

const email =
document.getElementById("email").value;

const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regex.test(email)){

document.getElementById("emailError")
.textContent =
"Invalid email format";

return false;

}

document.getElementById("emailError")
.textContent = "";

return true;

}

function validateCountry(){

if(country.value === ""){

document.getElementById("countryError")
.textContent =
"Please select a country";

return false;

}

document.getElementById("countryError")
.textContent = "";

return true;

}

/* Real-Time Validation */

document.getElementById("fullName")
.addEventListener("blur",
validateName);

document.getElementById("password")
.addEventListener("blur",
validatePassword);

document.getElementById("phone")
.addEventListener("blur",
validatePhone);

document.getElementById("email")
.addEventListener("blur",
validateEmail);

country.addEventListener("change",
validateCountry);

/* Submit Form */

form.addEventListener("submit",(e)=>{

e.preventDefault();

const isValid =

validateName() &&
validatePassword() &&
validatePhone() &&
validateEmail() &&
validateCountry();

if(isValid){

document.getElementById("successMessage")
.textContent =
"Registration Successful ✅";

form.reset();

currency.value = "";

}else{

document.getElementById("successMessage")
.textContent = "";

}

});