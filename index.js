
const sectionTest = document.querySelector('.test');
const selectList = document.querySelector('.select__list');
async function getPlanet () {
    try {
        const response = await fetch('https://swapi.dev/api/planets')
        const data = await response.json()
        const planets = data.results
        console.log(planets)
    }
    catch (error){
        console.error(error)
    }
}

async function getPeople (){
   try{
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json()
    const characters = data.results
    console.log(characters)
    }
    catch (error){
        console.error(error);
    }
    
}

async function getFilms (){
    try{
        const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json()
        const films = data.results
        console.log(films)
    }
    catch(error){
        console.error(error)
    }
}
getPlanet();
getPeople();
getFilms();