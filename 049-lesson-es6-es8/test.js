// ES vs ES6:

// ==============
// undefined
// console.log(a);
// var a = 0;

// ===============
// ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 0;

// =============== Верно
// let a = 0;
// console.log(a);

// =============== this - потяряло свой контекст вызова и теперь ссылается на глобальный объект window
// let obj = {
//     number: 5,
//     sayNumber: function() {
//             function say() {
//                 console.log(this);
//         }
//         say();
//     }
// }
// obj.sayNumber();

// // =============== Чтобы это исправить меняем функцию say() на стрелочную:
// let obj = {
//     number: 5,
//     sayNumber: function() {
//             let say = () => {
//                 console.log(this);
//         }
//         say();
//     }
// }
// obj.sayNumber(); 

// { number: 5, sayNumber: [Function: sayNumber] } результат



// ===============

// Методы .map и .filter — это методы перебора массивов, которые перебирают весь массив и возвращают нам уже 
// новый, сформированный массив, в зависимости от того callback,который мы передали в них:

// let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// let shortNames = names.filter((name) => {
//     return name.length < 5
// })

// console.log(shortNames);

// // [ 'Ivan', 'Ann' ] результат


// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);

// [ 'ivan', 'anna', 'hello' ] результат





// ======================= Интерполяция (повторение):
// console.log(`Пользователь ${name}, &{age} лет`);




// ================= Параметры по умолчанию (повторение):
// function fetchData(data, count) {
//     console.log(`Данные: ${data} в количестве ${count}`);
// }
// fetchData('something');
// Данные: something в количестве undefined (результат)


// Раньше применяли трюк:
// function fetchData(data, count) {
//     count = count || 0;
//     console.log(`Данные: ${data} в количестве ${count}`);
// }
// fetchData('something');
// Данные: something в количестве 0 (результат)

// В ES2015:
// function fetchData(data, count = 0) {
//     console.log(`Данные: ${data} в количестве ${count}`);
// }
// fetchData('something');
// Данные: something в количестве 0 (результат)


// ====================== в ES2015 добавили еще REST-оператор (группирует в массив аргументы,которые не были переданы, как аргументы функции):

// function max (a, b, ...numbers) {
//     console.log(numbers);
// }
// max(3, 4, 67, 97);

// [ 3, 4, 67 ] результат (...numbers всегда должен быть в конце)


// ====================== SPREAD-оператор (разворачивает массив):
// const arr1 = [1, 2, 3],
//       arr2 = [43, 2, 6];

// const res = Math.max(...arr1, 300,...arr2)
// console.log(res);
// // 300 результат


// ====================== В ES8 был добавлен SPREAD-оператор:
// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// }
// // const res = Object.assign({},user, admin); // ES6
// const res = {...user, ...admin}; // ES8
// console.log(res);


// ======================== Упрощение:
// const x = 25, y = 10;
// const coords = {
//     x: x,
//     y: y
// }
// console.log(coords);
// //{ x: 25, y: 10 } результат

// const x = 25, y = 10;
// const coords = {
//     x,
//     y
// }
// console.log(coords);
// // { x: 25, y: 10 } результат тоже самое

// =========== Еще упрощения: 
// const x = 25, y = 10;
// const coords = {x, y,
//     // calcSq: function() {
//         console.log(this.x * this.y);
//     // } // рашьше
//     calcSq() {
//         console.log(this.x*this.y);
//     }
// }
// coords.calcSq();

// // console.log(coords);


// ============= Результат упрощений (на предыдущем примере):

// const avatar = 'Photo';
// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// }
// const res = {...user, ...admin, avatar};
// console.log(res);

// { name: 'admin', pass: 'root', rights: 'user', avatar: 'Photo' } результат

// ============= Деструктуризация:
// const user = {
//         name: 'default',
//         pass: 'qwerty',
//         rights: 'user'
//     };
//     console.log(user.name); // default результат


    // const user = {
    //     name: 'default',
    //     pass: 'qwerty',
    //     rights: 'user'
    // };
    // // const userName = user.name; // И каждый раз бы мы создавали,если нужно несколько значений объекта
    
    // const {name, pass, rights} = user;
    // console.log(name, rights);
    // default user // результат

// Пример сложнее:

// const user = {
//         name: {
//             first: 'Sam',
//             second: 'Smith'
//         },
//         pass: 'qwerty',
//         rights: 'user'
//     };
//     // user.name.first - добраться до объекта

//     const {name: {first, second}, pass, rights} = user; // просто вытащили Sam Smith результат

// console.log(first, second);


// ================ Паттерн в JS (объект с настройками):

// function connect(options) {

// } //  раньше


//  Теперь используем Деструктуризацию + Параметры по умолчанию (!) (можем даже что-то забыть передать)
// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = 'default'}) {
//                 console.log(`host: ${host}, port: ${port}, user: ${user}`);
// }

// connect({
//     port: 232
// })
// host: localhost, port: 232, user: default    ----- результат!


// + BONUS: (присвоить и объекту-параметру функции connect тоже параметр по умолчанию, чтобы упасти себя от передачи connect() c НЕ объектом!!):
// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = 'default'} = {}) {
//                 console.log(`host: ${host}, port: ${port}, user: ${user}`);
// }

// connect()
// host: localhost, port: 3000, user: default    ----- результат,все параметры по умолчанию!





// ============= Деструктуризация для массивов:

// const numbers = [3, 5, 6, 6];

// const [a, b, c] = numbers;
// console.log(a, b, c); //3 5 6 результат


// const [, , c] = numbers;
// console.log(c); //6 результат


// Массив в массиве:

// const numbers = [[3, 5], [6, 6]];

// // numbers[0][0] сложно обраться к 3, если многомерный массив
// const [[a, b], [c, d]] = numbers;
// console.log(a, b, c, d); //3 5 6 6  результат


// / ============= Деструктуризация на реальном примере:

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

// country.gender.male[0] // по-старинке

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18, femAdult); //15% 29% результат
