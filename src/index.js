import createMenuPage from './modules/menu';
import generateMainPage from './modules/home';
import generateContactPage from './modules/contact';
import createNavBar from './helper/createNavBar';
import createFooter from './helper/createFooter';

const resetScreen = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ``;
}

const createNavBarWithListeners = () => {
    createNavBar();

    document.querySelector("#home").addEventListener('click', () => {
        resetScreen();
        home();
    });
    
    document.querySelector("#contact").addEventListener('click', () => {
        resetScreen();
        contact();
    });
    
    document.querySelector('#menu').addEventListener('click', () => {
        resetScreen();
        menu();
    });
}

const home = () => {
    createNavBarWithListeners();
    generateMainPage();
    createFooter();
  
}

const menu = () => {
    createNavBarWithListeners();
    createMenuPage();
    createFooter();
}

const contact = () => {
    createNavBarWithListeners();
    generateContactPage();
    createFooter();
}

// First load
home();
