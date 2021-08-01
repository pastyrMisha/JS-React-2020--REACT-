https://www.npmjs.com/package/react-router-dom

npm install --save react-router-dom


<!-- <Route path='/books/:id' render={(match, location, history) => {return <BooksItem/>}} /> -->

match - объект с данными о том, как именно path совпал с текущем адресом и в нем же есть параметр :id

location - состояние и положение роутера в текущий момент

history - API для организации перехода между страницами