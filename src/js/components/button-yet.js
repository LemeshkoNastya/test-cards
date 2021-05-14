// Magic strings
const classCardTimes = '.card__times';
const classCardTime = '.card__time';
const classInfo = '.card__info';
const sizeIndent = '50px';

const layoutCardTimes = `
    <button class="card__time">12:00</button>
    <button class="card__time">12:00</button>
    <button class="card__time">12:00</button>
    <button class="card__time">ещё...</button>
`;

const layoutButton = '<button class="card__time">12:00</button>';

// Magic numbers
const elemYet = 4;
const indexElemYet = 3;

// Variables
const cardTimes = document.querySelectorAll(classCardTimes);
const cardInfo = document.querySelectorAll(classInfo);


cardTimes.forEach((element, index) => {
    let buttons = element.querySelectorAll(classCardTime);

    if (buttons.length > elemYet) {
        element.innerHTML = layoutCardTimes;

        let newButtons = element.querySelectorAll(classCardTime);

        newButtons[indexElemYet].addEventListener('click', () => {
            element.innerHTML = '';

            for (let i = 0; i < buttons.length; i++) {
                element.innerHTML += layoutButton;
            }
        });

        cardInfo[index].style.marginTop = '50px';
    } 
});