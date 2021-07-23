// let url = 'https://jsonplaceholder.typicode.com/posts/',
//     data = {username: 'example'};

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type':'application/json'
//     }
// })
//     .then((response) => response.json())
//     .then((myJson) => console.log('Success', myJson))
//     .catch(error => console.error('Error', error)); 


// ==============================================================

// const getResourse = (url) => {
//     const res = fetch(url),
//           some = res.json();

//     return some;
// };

// getResourse('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => console.log('Success', res))
//     .catch(error => console.error('Error', error)); 

// result: script.js:20 Uncaught TypeError: res.json is not a function
//  Наша url передалась в res, fetch - асинхронно отправляет запрос на сервер и ждет ответ, а синхронная ф-ия getResourse идет дальше, не дожидаясь ответа от сервера.

// =================================================================

// const getResourse = async (url) => {
//     const res = await fetch(url),
//           some = await res.json();

//     return some;
// };

// getResourse('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res) => console.log('Success', res))
//     .catch(error => console.error('Error', error)); 

// async/await

// ====================================================================

class GotService {

    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url }`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    getAllCharacters() {
        return this.getResourse('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }
}

const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

got.getCharacter(130)
    .then(res => console.log(res));