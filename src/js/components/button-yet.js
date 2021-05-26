// Magic strings
const classCardTimes = '.card__capabilities__times';
const classCardTime = '.card__capabilities__time';
const nameClassCardTime = 'card__capabilities__time';
const nameClassCardTimeTub = 'card__capabilities__time__yet';
const classInfo = '.card__info';
const sizeIndent = '50px';
const timeFlight = '12:00';
const buttonYet = 'ещё...';

const layoutCardTimes = `
    <button class=${nameClassCardTime}>${timeFlight}</button>
    <button class=${nameClassCardTime}>${timeFlight}</button>
    <button class=${nameClassCardTime}>${timeFlight}</button>
    <button class=${nameClassCardTime}>${buttonYet}</button>
`;

const layoutButton = `<button class=${nameClassCardTime}>${timeFlight}</button>`;

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

            const buttonsTime =  element.querySelectorAll(classCardTime);
            
            for (let i = 0; i < buttonsTime.length; i ++) {
                buttonsTime[i].classList.add(nameClassCardTimeTub);
            }
        });
    } 
});