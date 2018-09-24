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
const students = [];
const voltStudents = [];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const printToDom2 = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const buildNewStudentCard = () => {
    const studentName = studentNameElem.value;
    if (studentName === '') {
        alert("Please enter your name.")
    } else {
        let randomize = Math.floor((Math.random() * houses.length));
        let house = houses[randomize].name;
        let houseImg = houses[randomize].image;
        students.push({house, houseImg, studentName});
        const sortedStudents = students.sort((a, b) => a.studentName > b.studentName);
        const domString = sortedStudents.map(student => `<div class="${student.house} card d-flex row justify-content-center m-2" style="width: 10rem;">
            <img class="card-img-top" src="${student.houseImg}" alt="${student.house}">
            <div class="card-body text-center">
                <h5 class="card-name">${student.studentName}</h5>
                <h6 class="card-house">${student.house}</h6>
                <button type="button" class="expel-button btn btn-danger" id="expel">EXPEL</button>
            </div>
        </div>`);
    printToDom(domString, 'card-div');
    activateExpel();
    studentNameElem.value = '';
    }
};

const buildVoldemortCard = (studentName) => {
    let houseImage = voldemort[0].image;
    voltStudents.push({studentName});
    const sortedVoltStudents = voltStudents.sort((a, b) => a.studentName > b.studentName);
    const newString = sortedVoltStudents.map(student => `
        <div class=" voldemort card d-flex row justify-content-center m-2" style="width: 10rem;">
        <img class="card-img-top" src="${houseImage}" alt="Voldemort">
        <div class="card-body text-center">
            <h5 class="card-name">${student.studentName}</h5>
            <h6 class="card-house">Voldemort's Army</h6>
        </div>
    </div>`);
    printToDom(newString, 'voldemort-div');    
};

const activateExpel = () => {
    const expelButtons = document.getElementsByClassName('expel-button');
    for (let i = 0; i < expelButtons.length; i++) {
        const element = expelButtons[i];
        element.addEventListener('click', (e) => {
            const buttonClicked = e.target;
            let studentName = buttonClicked.previousElementSibling.previousElementSibling.innerHTML;
            buttonClicked.parentNode.parentNode.remove();
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