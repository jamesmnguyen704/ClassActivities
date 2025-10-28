// replacing header text
const h1 = document.querySelector('h1');
h1.textContent = "Hero Turtles: The college years";
// appending new list items to existing lists
const characterList = document.getElementById('characters');
const aprilOneil = document.createElement('li');
aprilOneil.textContent = "April O'Neil";
characterList.appendChild(aprilOneil);
//append to weapons list
const weaponList = document.getElementById('weapons');
const newsCamera = document.createElement('li');
newsCamera.textContent = "news camera";
weaponList.appendChild(newsCamera);

const word = ""
