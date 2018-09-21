const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

let randomize = Math.floor((Math.random() * houses.length));
let house ='';
