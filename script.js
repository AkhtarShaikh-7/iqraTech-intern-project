const projects = [

    {
        title: "OTP Generator",
        description: "Generate a random OTP and display it in an alert when the “Generate OTP” button is clicked.",
        link: "projects/P1/index.html"
    },

    {
        title: "Customer Capture System",
        description: " Dynamically add customers to the relevant section upon form submission.",
        link: "projects/P2/index.html"
    },

    {
        title: "Budget Management System",
        description: "Develop a budget management system with a form for inputting budget details and a dynamic table for displaying and managing budgets.",
        link: "projects/P3/index.html"
    },

    {
        title: "Task Scheduler",
        description: "Create a Task Scheduler using HTML, CSS, and JavaScript. This tool will allow users to input tasks, set their due dates, and manage their schedules effectively.",
        link: "projects/P4/index.html"
    },

    {
        title: "Product Management Table",
        description: "Create a web page with a table containing data that users can sort and filter based on different criteria.",
        link: "projects/P5/index.html"
    },
    {
        title: "Employee Database Management",
        description: "Create a web application that allows users to manage employee records, including adding, editing, deleting, and searching for employees.",
        link: "projects/P6/index.html"
    },
    {
        title: "Pagination Demo",
        description: "Create a web page that displays a list of items, with pagination controls at the bottom to navigate between pages.",
        link: "projects/P7/index.html"
    },
    {
        title: "Expense Tracker",
        description: "Create a web page where users can input their expenses, categorize them, and view a summary of their spending.",
        link: "projects/P8/index.html"
    },
    {
        title: "Registration Form",
        description: "Implement client-side form validation for a registration form using JavaScript. The form includes fields for full name, password, phone number, email address, and a select field for country.",
        link: "projects/P9/index.html"
    },

];

const container =
    document.getElementById("projectContainer");

projects.forEach((project,index) => {

    container.innerHTML += `
<div class="project-card">
 <div class="project-number">
      Project ${index + 1}
    </div>
<h2>${project.title}</h2>

<p>${project.description}</p>

<a href="${project.link}">
Open Project
</a>

</div>
`;

});