
// Array of project objects containing project details
const projects = [
    { 
        title: "Project 1",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 1"
    },
    { 
        title: "Project 2",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 2"
    },
    { 
        title: "Project 3",
        imageUrl: "https://via.placeholder.com/150",
        description: "Description for Project 3"
    }
];

// Function to dynamically create project blocks
function createProjectBlocks() {
    const projectsContainer = document.getElementById("project-list");

    projects.forEach(project => {
        const projectBlock = document.createElement("div");
        projectBlock.classList.add("project");

        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;

        const projectImage = document.createElement("img");
        projectImage.classList.add("project-image");
        projectImage.src = project.imageUrl;

        const projectDescription = document.createElement("div");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;

        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);

        projectBlock.appendChild(projectImage);
        projectBlock.appendChild(projectContent);

        projectsContainer.appendChild(projectBlock);
    });
}

// Call the function to create project blocks when the page loads
window.onload = createProjectBlocks;