const houses = [
    {
        name:'Gryffindor', 
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004'
    },

    {
        name: 'Hufflepuff',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518'
    },

    {
        name: 'Ravenclaw',
        image: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442'
    },

    {
        name: 'Slytherin',
        image: 'http://cdn.playbuzz.com/cdn/204cdd30-3172-4631-8d23-b6af7f63401e/5aa52373-6c49-4544-8eee-f0a4f5ec1eed.jpg'
    }
];

const studentNameElem = document.getElementbyId('student-name');
const sortButtonElem = document.getElementById('sort-button');


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const buildNewStudentCard = (studentName) => {
    let domString = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="" alt="">
    <div class="card-body">
        <h5 class="card-name">${studentName}</h5>
        <h6 class="card-house">${house}</p>
        <a href="#" class="btn btn-danger">EXPEL</a>
    </div>
</div>`;

    printToDom(domString, 'toDoCards');
    activateDeletes();
};



let randomize = Math.floor((Math.random() * houses.length));
let house ='';

sortButtonElem.addEventListener('click', (e) => {
    e.preventDefault();
    buildNewStudentCard(studentNameElem.values);
});