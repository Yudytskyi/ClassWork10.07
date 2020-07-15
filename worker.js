// class User {
//     constructor(name, surname, age) {
//         this.firstName = name;
//         this.lastname = surname;
//         this.age = age;
//     }
//
//     getFullName() {
//         return `${this.firstName} ${this.lastname}`
//     };
//
//     sayHello() {
//         return `Hello, my name is ${this.getFullName()}`
//     }
//
//     isAdoult() {
//         return `${this.firstName} is ${this.age > 17 ? '' : 'not'} an adult`;
//     }
//
//     static isUser(obj) {
//         return obj instanceof User;
//     }
//
//     static isAdult(user) {
//         if (!this.isUser(user)) {
//             throw new TypeError('param user must be instance of User class')
//         }
//         return `${user.firstName} is${user.age > 17 ? '' : ' not'} an adult`;
//     }
// }

// const vasya = new User('Vasya', 'Petrov', 36);
// const olya = new User('Olya', 'Sydorova', 13)
// // // console.log(vasya.sayHello());
// // console.log(olya.sayHello());
// // console.log(olya.isAdoult());
// // console.log(vasya.isAdoult());
// console.log(User.isAdult(olya))
// console.log(User.isAdult(vasya))

// class Auto {
//     constructor(brand, color, age = 0) {
//         this.brand = brand;
//         this.color = color;
//         this.age = age;
//     }
//
//     beBe() {
//         return `${this.brand} is BE-BEP!`
//     }
//
//     isRepairs (){
//         return `Repairs is ${this.age > 5 ? '' : 'not'} needed`;
//     }
//
//     static isRepairs(auto){
//         if (!this.isRepairs(auto)) {
//             throw new TypeError('param user must be instance of User class')
//         }
//         return `Your auto repairs is ${this.age > 5 ? '' : 'not'} needed`;
//     }
// }
//
// const mazda = new Auto('Mazda', 'red');
// console.log(mazda.isRepairs())

// class RangeValidator {
//     constructor(name, surname, rate, days = 0) {
//         this.name = name;
//         this.surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//
//     getSalary() {
//         return this.rate * this.days;
//     }
//
//     get rate() {
//         return this._rate;
//     }
//
//     set rate(value) {
//         if (typeof value !== 'number') {
//             throw new TypeError('rate value must be number type')
//         }
//         this._rate = value;
//     }
//
//     get days() {
//         return this._rate;
//     }
//
//     set days(value) {
//         if (typeof value !== 'number') {
//             throw new TypeError('days value must be number type')
//         }
//         if (value < 0) {
//             throw new RangeError('days value must be positive number type')
//         }
//         this._days = value;
//     }
// }
//
// const vasya = new Worked('Vasya', 'Ivanov', 20, 30);
// console.log(`carrent vasya.rate = ${vasya.rate}`);
// vasya.rate = 25;
// console.log(`new vasya.rate = ${vasya.rate}`);
//

//
// class User {
//     constructor(name, surname, age, email, isBanned = false) {
//         this._firstName = name;
//         this._lastname = surname;
//         this._age = age;
//         this._email = email;
//     }
//
//     set isBanned(v) {
//         if (typeof v) {
//
//         }
//     }
//
//     get isBanned(v) {
//         return
//     }
//
//     get FullName() {
//         return `${this._firstName} ${this._lastname}`
//     };
//
//     get sayHello() {
//         return `Hello, my name is ${this.getFullName()}`
//     }
//
//     get isAdoult() {
//         return `${this._firstName} is ${this._age > 17 ? '' : 'not'} an adult`;
//     }
//
// }
//
// class Moderator extends User(name, surname, age, email) {
//     constructor(name, surname, age, email) {
//         super(name, surname, age, email);
//     }
//
//     grant(user) {
//         user.isBanned = false;
//     }
//
//     ban(user) {
//         user.isBanned = true;
//     }
// }

// user1 = new User('Andrey', )

class Squirrel {
    constructor(name) {
        this._name = name
    }

    eat() {
        return `Squirrel ${this._name} is eating`
    }

    climb() {
        return `Squirrel ${this._name} is climbing`
    }
}

const squirrel1 = new Squirrel('Test1')

class FlyingSquirrel extends Squirrel {
    constructor(name, distance) {
        super(name);
        this._distance = distance;
    }

    fly() {
        return `FlyingSquirrel ${this._name} is flying on`
    }
}

const squirrel2 = new FlyingSquirrel('Test2', 60)


class PushkingSquirrel extends FlyingSquirrel {
    constructor(name, distance, repertoire) {
        super(name, distance);
        this._repertoire = repertoire;
    }

    dance() {
        return `PuskinSquirrel ${this._name} is dancing`
    }

    sing() {
        for (let i of this._repertoire)
            console.log(i)
    }

    eat() {
        return `Squirrel ${this._name} is eating golg nuts`
    }

}

const squirrel3 = new PushkingSquirrel('Test3', 40, ['Lala1', 'Lala2', 'Lala3'])

console.log(squirrel3.sing());
console.log(squirrel3.dance());

class Figure {
    constructor() {
        this._name = name;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super('Triangle');
        this._a = a;
        this._b = a;
        this._angle = angle;
    }

    getArea() {
        return 0.5 * this._a * this._b * Math.sin(this._angle * Math.PI / 180);
    }
}
class Square extends Figure {
    constructor(a) {
        super('Square');
        this._a = a;

    }

    getArea() {
        return this._a * this._a;
    }
}

class Round extends Figure {
    constructor(r) {
        super('Round');
        this._a = r;
    }


    getArea() {
        return 2  * Math.PI* this.r* this.r;
    }
}



