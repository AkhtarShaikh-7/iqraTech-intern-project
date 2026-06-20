const itemContainer =
document.getElementById("itemContainer");

const pagination =
document.getElementById("pagination");

/* Create 100 Items */

const items = [];

for(let i=1;i<=100;i++){

items.push(`Item ${i}`);

}

const itemsPerPage = 10;

let currentPage = 1;

/* Display Items */

function displayItems(page){

itemContainer.innerHTML = "";

const start =
(page - 1) * itemsPerPage;

const end =
start + itemsPerPage;

const pageItems =
items.slice(start,end);

pageItems.forEach(item => {

const div =
document.createElement("div");

div.classList.add("item");

div.textContent = item;

itemContainer.appendChild(div);

});

}

/* Create Pagination */

function setupPagination(){

pagination.innerHTML = "";

const totalPages =
Math.ceil(
items.length / itemsPerPage
);

/* Previous Button */

const prevBtn =
document.createElement("button");

prevBtn.textContent = "Prev";

prevBtn.disabled =
currentPage === 1;

if(currentPage === 1){

prevBtn.classList.add("disabled");

}

prevBtn.addEventListener("click",()=>{

if(currentPage > 1){

currentPage--;

updatePage();

}

});

pagination.appendChild(prevBtn);

/* Page Numbers */

for(let i=1;i<=totalPages;i++){

const pageBtn =
document.createElement("button");

pageBtn.textContent = i;

if(i === currentPage){

pageBtn.classList.add("active");

}

pageBtn.addEventListener("click",()=>{

currentPage = i;

updatePage();

});

pagination.appendChild(pageBtn);

}

/* Next Button */

const nextBtn =
document.createElement("button");

nextBtn.textContent = "Next";

nextBtn.disabled =
currentPage === totalPages;

if(currentPage === totalPages){

nextBtn.classList.add("disabled");

}

nextBtn.addEventListener("click",()=>{

if(currentPage < totalPages){

currentPage++;

updatePage();

}

});

pagination.appendChild(nextBtn);

}

/* Update Page */

function updatePage(){

displayItems(currentPage);

setupPagination();

}

/* Initial Load */

updatePage();