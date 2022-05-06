import Abalone from '../images/abalone.jpeg';
import Beer from '../images/beer.jpg';
import BlueBerry from '../images/blueberry.jpg';
import Egg from '../images/egg.jpeg';
import HoneyStar from '../images/honeystar.jpeg';
import Koko from '../images/koko.jpeg';
import Lime from '../images/lime.jpg';
import Mushroom from '../images/mushroom.jpeg';
import Pork from '../images/pork.jpeg';
import Sarsi from '../images/sarsi.jpg';
import "../styles/styles.css";
import "../styles/menu.css";

const createFoodContainer = (segmentTitle, ...imagesAndDescription) => {
    const container = document.createElement("div");
    container.classList.add("details-card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = segmentTitle;
    container.appendChild(title);

    const ul = document.createElement('ul');
    ul.classList.add('food-images-list');
    for (const [image, description] of imagesAndDescription) {
        const li = document.createElement('li');

        const foodImg = new Image();
        foodImg.src = image;

        const foodDescription = document.createElement("p");
        foodDescription.textContent = description;

        li.appendChild(foodImg);
        li.appendChild(foodDescription);

        ul.appendChild(li);
    }

    container.appendChild(ul);

    return container;
}

const generateMenuPage = () => {
    const mainContent = document.querySelector("#content");
    
    const mainDish = createFoodContainer("Main Dish",
    [Pork, "Marinated Prok with Soya Sauce"],
    [Abalone, "Abalone of Wealth"],
    [Egg, "An abnormal egg..."],
    [Mushroom, "Mushrooms!"]);

    const sideDish = createFoodContainer("Side Dish",
        [HoneyStar, "Honeystar with Milk"],
        [Koko, "Honeystar and KokoKrunch with Milk"]);

    const beverages = createFoodContainer("Beverages",
        [BlueBerry, "Ice Blended Blueberry"],
        [Sarsi, "Ice Blended Sarsi"],
        [Lime, "Ice Blended Lime Juice"],
        [Beer, "2l Beer Tower"]);

    mainContent.appendChild(mainDish);
    mainContent.appendChild(sideDish);
    mainContent.appendChild(beverages);

    return mainContent;
}

export default generateMenuPage;