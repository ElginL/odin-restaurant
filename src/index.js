import createMenuPage from './modules/menu';
import generateMainPage from './modules/home';
import createNavBar from './helper/createNavBar';
import createFooter from './helper/createFooter';

const home = () => {
    createNavBar();
    generateMainPage();
    createFooter();

    document.querySelector('#menu').addEventListener('click', (e) => {
        e.preventDefault();
        resetScreen();
        menu();
    });
}

const menu = () => {
    createNavBar();
    createMenuPage();
    createFooter();

    document.querySelector("#home").addEventListener('click', (e) => {
        e.preventDefault();
        resetScreen();
        home();
    });
}

const resetScreen = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ``;
}

// First load
home();