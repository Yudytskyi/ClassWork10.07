class Worked {
    constructor(name, surname, rate, days = 0) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}
const vasya = new Worked('Vasya', 'Ivanov', 20, 30 );

console.log(vasya.getSalary());