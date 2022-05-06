import Manager from '../images/kid.jpg';
import Chef from '../images/monk.jpg';
import '../styles/styles.css';
import '../styles/contact.css';

const createContact = (status, surname, phoneNumber, email, image) => {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contacts-container");

    const contactInformation = document.createElement("div");
    contactInformation.classList.add("contacts-information");

    contactInformation.innerHTML = `
        <p class="contact-name"><b>${status}</b> ${surname}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Email: ${email}</p>  
    `;

    contactContainer.appendChild(contactInformation);

    const manager = new Image();
    manager.src = image;
    contactContainer.appendChild(manager);

    return contactContainer;
}

const generateContactPage = () => {
    const detailsCard = document.createElement("div");
    detailsCard.classList.add("details-card");

    const title = document.createElement("h1");
    title.classList.add("details-card-title");
    title.textContent = "Contacts";
    detailsCard.appendChild(title);

    detailsCard.appendChild(createContact("Manager", "Lee", "987654321", "hello@hello.com", Manager));
    detailsCard.appendChild(createContact("Chef", "Tan", "123456789", "hi@hi.com", Chef));

    const content = document.querySelector("#content");

    return content.appendChild(detailsCard);
}

export default generateContactPage;