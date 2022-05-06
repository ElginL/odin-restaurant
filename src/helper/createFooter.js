// Creates the footer
const createFooter = () => {
    const container = document.createElement("footer");

    container.innerHTML = `
        <ul>
            <li class="footer-text">Background image from Pixabay</li>
            <li class="footer-text">Made By Elgin Lee</li>
            <li class="footer-text">Webpack!</li>
        </ul>
    `;

    const content = document.querySelector("#content");

    return content.appendChild(container);
}

export default createFooter;