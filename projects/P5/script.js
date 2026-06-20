const products = [

{
    name:"Laptop",
    price:65000,
    category:"Electronics"
},

{
    name:"Mobile",
    price:25000,
    category:"Electronics"
},

{
    name:"T-Shirt",
    price:800,
    category:"Clothing"
},

{
    name:"Jeans",
    price:1500,
    category:"Clothing"
},

{
    name:"JavaScript Book",
    price:1200,
    category:"Books"
},

{
    name:"React Book",
    price:1500,
    category:"Books"
}

];

let sortDirection = true;

const tableBody =
document.getElementById("tableBody");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

renderTable(products);

/* Render Table */

function renderTable(data){

    tableBody.innerHTML = "";

    data.forEach(product => {

        const row =
        document.createElement("tr");

        row.innerHTML = `

            <td>${product.name}</td>

            <td>₹${product.price}</td>

            <td>${product.category}</td>

        `;

        tableBody.appendChild(row);

    });

}

/* Sorting */

function sortTable(column){

    const sortedData = [...products];

    sortedData.sort((a,b)=>{

        if(typeof a[column] === "string"){

            return sortDirection
            ? a[column].localeCompare(b[column])
            : b[column].localeCompare(a[column]);

        }

        return sortDirection
        ? a[column] - b[column]
        : b[column] - a[column];

    });

    sortDirection = !sortDirection;

    renderTable(sortedData);

}

/* Filtering */

searchInput.addEventListener("input",
filterProducts);

categoryFilter.addEventListener("change",
filterProducts);

function filterProducts(){

    const searchValue =
    searchInput.value.toLowerCase();

    const categoryValue =
    categoryFilter.value;

    const filteredData =
    products.filter(product => {

        const matchesSearch =
        product.name
        .toLowerCase()
        .includes(searchValue);

        const matchesCategory =

        categoryValue === "all"

        ||

        product.category === categoryValue;

        return matchesSearch &&
               matchesCategory;

    });

    renderTable(filteredData);

}