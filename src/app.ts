import { icar } from "./car.js";

var url = "http://localhost:3000/cars";
var carPlates = [];
var ul = document.querySelector('#plates');

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach((car:icar) => {

        let newCar = new icar(
            car.plate
        );
        carPlates.push(newCar);
    });
    carPlates.forEach((car:icar) => {
        var li = document.createElement('li');
        li.textContent = car.plate;
        ul.appendChild(li);
    });
});