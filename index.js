
const sectionTest = document.querySelector('.test');
const selectList = document.querySelector('.select__list');
const inputNumber = document.querySelector('.input__number');

async function getPlanets () {
    try {
        const response = await fetch('https://swapi.dev/api/planets');
        const data = await response.json();
        const planets = await data.results;
        const planetName = await planets[inputNumber.value - 1].name;
        selectedResult.textContent = planetName;
    }
    catch (error){
        console.error(error)
    }
}

async function getPeople (){
   try{
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    const characters = await data.results;
    const charactersName = await characters[inputNumber.value - 1].name;
    selectedResult.textContent = charactersName;
    }
    catch (error){
        console.error(error);
    }
}

async function getFilms (){
    try{
        const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json();
        const films = await data.results;
        const filmsName =  await films[inputNumber.value - 1].title;
        selectedResult.textContent = filmsName;
    }
    catch(error){
        console.error(error)
    }
}


const optionPlanets = document.getElementById('planets');
const optionCharacters = document.getElementById('characters');
const optionFilms = document.getElementById('films');
const selectedResult = document.querySelector('.result');

function showSelectedName () {
    if(optionPlanets.selected){
        getPlanets()
    }
     if (optionCharacters.selected) {
        getPeople ()
    }
    if (optionFilms.selected){
        getFilms ()
    }
}

document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    showSelectedName();
});