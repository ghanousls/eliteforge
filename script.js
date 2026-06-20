
const projects = [

    {
    name: "E-Commerce Redesign",
    client: "MOHAMMED",
    budget: "34,0000 da",
    status: "Active"
    },
    
    {
    name: "APP for pohone",
    client: "IRIS",
    budget: "50.0000 da",
    status: "Review"
    },
    
    {
    name: "nafdal website",
    client: "nafdal",
    budget: "30,00000 da",
    status: "Pending"
    }
    
    ];
    
    const container =
    document.getElementById("projectContainer");
    
    projects.forEach(project => {
    
    const card = document.createElement("div");
    
    card.classList.add("project-card");
    
    card.innerHTML = `
    <h3>${project.name}</h3>
    <p><strong>Client:</strong> ${project.client}</p>
    <p><strong>Budget:</strong> ${project.budget}</p>
    <span class="status ${project.status.toLowerCase()}">
    ${project.status}
    </span>
    `;
    
    container.appendChild(card);
    
    });
      
    document
    .getElementById("themeBtn")
    .addEventListener("click", () => {
    
    document.body.classList.toggle(
    "dark-mode"
    );
    
    });
     
    document
    .getElementById("clientForm")
    .addEventListener("submit", e => {
    
    e.preventDefault();
    
    let name =
    document
    .getElementById("clientName")
    .value
    
    let email =
    document
    .getElementById("email")
    .value
    .trim()
    .toLowerCase();
    
    let description =
    document
    .getElementById("description")
    .value
    .trim();
    
    const msg =
    document.getElementById(
    "formMessage"
    );
    
    if(
    name === "" ||
    email === "" ||
    description === ""
    ){
    msg.textContent =
    "All fields are required.";
    return;
    }
    
    if(
    !(
    email.endsWith("@gmail.com")
    ||
    email.endsWith("@yahoo.com")
    )
    ){
    msg.textContent =
    "Only Gmail or Yahoo emails allowed.";
    return;
    }
       
    });
const adviceBtn  = document.getElementById('getAdviceBtn');

async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  document.getElementById("adviceText").textContent = data.slip.advice;
}

fetchAdvice();

document.getElementById("getAdviceBtn").addEventListener("click", fetchAdvice);

