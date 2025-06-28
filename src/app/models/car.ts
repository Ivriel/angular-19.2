export class Car { // normalnya digunakan ketika membuat variabel dan itu di binding ke form
    carId:number;
    brand:string;
    model:string;
    year:number;
    color:string;
    dailyRate ?:number; // optional
    carImage:string;
    regNo:string;

    constructor(){ // ketika perlu default value untuk initialize
        this.carId = 0;
        this.brand = "";
        this.model = "";
        this.year = 0;
        this.color = "";
        this.dailyRate = 0;
        this.carImage = "";
        this.regNo = "";
    }
}

export interface ICarList { // digunakan ketika menyimpan value ke object dan di binding ke form
    carId:number, // atau hanya meng store data
    brand:string,
    model:string,
    year:number,
    color?:string,
    dailyRate:number,
    carImage:string,
    regNo:string
}