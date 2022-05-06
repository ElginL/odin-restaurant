// Creates and returns a navigation bar.
const createNavigationBar = () => {
    const navBar = document.createElement("nav");
    navBar.classList.add("navigation-bar");

    navBar.innerHTML = `
        <ul>
            <li class="nav-item">
                <a class="nav-link" id="home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="menu">Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact">Contact</a>
        </ul>
    `;

    const content = document.querySelector('#content');

    return content.appendChild(navBar);
}

export default createNavigationBar;