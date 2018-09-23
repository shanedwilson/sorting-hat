const houses = [
    {
        name:'Gryffindor', 
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest/scale-to-width-down/700?cb=20161124074004'
    },

    {
        name: 'Hufflepuff',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest/scale-to-width-down/700?cb=20161020182518'
    },

    {
        name: 'Ravenclaw',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest/scale-to-width-down/700?cb=20161020182442'
    },

    {
        name: 'Slytherin',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest/scale-to-width-down/700?cb=20161020182557'
    }
];

const voldemort = [
    {
        name: 'Voldemort',
        image: 'https://www.hp-lexicon.org/wp-content/uploads/2016/01/lord-voldemort.jpg'
    }
];

const studentNameElem = document.getElementById('student-name');
const sortButtonElem = document.getElementById('sort-button');
const startButtonElem = document.getElementById('start-button');
const jumbotron = document.getElementById('jumbo');
const nameInput = document.getElementById('name-input');
const expelButtonElem = document.getElementById('expel');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const buildNewStudentCard = () => {
    const studentName = studentNameElem.value;
    let domString = '';
    let randomize = Math.floor((Math.random() * houses.length));
    let house = houses[randomize].name;
    let houseImg = houses[randomize].image;
    domString += `<div class="card d-flex row justify-content-center m-2" style="width: 10rem;">
        <img class="card-img-top" src="${houseImg}" alt="${house}">
        <div class="card-body text-center">
            <h5 class="card-name">${studentName}</h5>
            <h6 class="card-house">${house}</h6>
            <button type="button" class="expel-button btn btn-danger" id="expel">EXPEL</button>
        </div>
    </div>`;
    printToDom(domString, 'card-div');
    activateExpel();
    studentNameElem.value = '';
};

const buildVoldemortCard = (studentName) => {
    let newString = '';
    let image = voldemort[0].image
    newString += `<div class="card d-flex row justify-content-center m-2" style="width: 10rem;">
        <img class="card-img-top" src="${image}" alt="Voldemort">
        <div class="card-body text-center">
            <h5 class="card-name">${studentName}</h5>
            <h6 class="card-house">Voldemort's Army</h6>
        </div>
    </div>`;
    printToDom(newString, 'voldemort-div');    
}

const activateExpel = () => {
    const expelButtons = document.getElementsByClassName('expel-button');

    for (let i = 0; i < expelButtons.length; i++) {
        const element = expelButtons[i];
        element.addEventListener('click', (e) => {
            const buttonClicked = e.target;
        let studentName = buttonClicked.previousElementSibling.previousElementSibling.innerHTML;
        console.log(studentName);
        buttonClicked.parentNode.parentNode.parentNode.remove();
            buildVoldemortCard(studentName);
        })
    }
};

sortButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    buildNewStudentCard();
});

startButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    jumbotron.setAttribute('style', 'display:none');
    nameInput.setAttribute('style', 'dispaly:block');
});