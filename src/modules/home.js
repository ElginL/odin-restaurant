import '../styles/styles.css';

const createMainCard = () => {
    // Name of the restaurant
    const createTitle = () => {
        const title = document.createElement("h1");
        title.classList.add("details-card-title");
        title.textContent = "Ali's Eatery";
    
        return title;
    }

    // Creates the section on Business / Opening Hours
    const createOpeningHours = () => {
        const container = document.createElement("div");
        container.classList.add("details-card-content-container");

        container.innerHTML = `
            <h2 class="card-title">
                Business Days / Opening Hours
            </h2>
            <ul id="opening-hours" class="details-card-content">
                <li>Monday 8am - 8pm</li>
                <li>Tuesday 8am - 8pm</li>
                <li>Wednesday 8am - 8pm</li>
                <li>Thursday 8am - 8pm</li>
                <li>Friday 8am - 8pm</li>
                <li><b>Closed on weekend and public holidays</b></li>
            </ul>
        `;

        return container;
    }

    // Creates the section on About Us
    const createAboutUs = () => {
        const container = document.createElement("div");
        container.classList.add("details-card-content-container");

        container.innerHTML = `
            <h2 class="card-title">About us</h2>
            <p class="details-card-content">
                World's greatest home cook food. Delicious and Scrumptious
                food guaranteed. Once you dine in at Ali's Eatery, you will
                never want to eat anywhere else again!
            </p>
        `;

        return container;
    }

    // Creates the section on Location
    const createLocationSection = () => {
        const container = document.createElement("div");
        container.classList.add("details-card-content-container");

        container.innerHTML = `
            <h2 class="card-title">
                Location
            </h2>
            <p class="details-card-content">
                Block 999 Level 9 #09-999 Singapore 999999
            </p>
        `;

        return container;
    }

    const detailsCard = document.createElement("div");
    detailsCard.classList.add("details-card");
    detailsCard.appendChild(createTitle());
    detailsCard.appendChild(createAboutUs());
    detailsCard.appendChild(createOpeningHours());
    detailsCard.appendChild(createLocationSection());
    
    return detailsCard;
}

const generateMainPage = () => {
    const mainContent = document.querySelector("#content");
    
    mainContent.appendChild(createMainCard());
}

export default generateMainPage;