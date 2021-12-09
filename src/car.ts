/*
* File: car.ts/js
* Author: Hermányi Gerely
* Copyright: 2021, Hermányi Gerely
* Group: Szoft II N
* Date: 2021-12-01
* Github: https://github.com/TheRealGerriii/
* Licenc: GNU GPL
*/
export class icar{
    id: number;
    plate: string;
    color: string;
    brand: string;
    year: number;
    capacity: number;
    fuel: string;
    price: number;
    sold: boolean;

    constructor(plate: string) {
        this.plate = plate;
    }
}





