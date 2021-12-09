/*
* File: app.ts/js
* Author: Hermányi Gerely
* Copyright: 2021, Hermányi Gerely
* Group: Szoft II N
* Date: 2021-12-09
* Github: https://github.com/TheRealGerriii/
* Licenc: GNU GPL
*/
import { icar } from "./car.js";
var url = "http://localhost:3000/cars";
var carPlates = [];
var ul = document.querySelector('#plates');
fetch(url)
    .then(res => res.json())
    .then(data => {
    data.forEach((car) => {
        let newCar = new icar(car.plate);
        carPlates.push(newCar);
    });
    carPlates.forEach((car) => {
        var li = document.createElement('li');
        li.textContent = car.plate;
        li.setAttribute('class', 'p-3 mb-2 list-group-item bg-secondary bg-opacity-50 text-white');
        ul.appendChild(li);
    });
});
