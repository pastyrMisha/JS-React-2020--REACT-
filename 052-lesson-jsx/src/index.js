import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


// const elem = (
//   <div>
//     <h2>Hello World!</h2>
//     <input type="text" placeholder="Type here" />
//     <button/> 
//   </div>
// )

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  return <input type="text" placeholder="Type here" />
}

const Btn = () => {
  return <button/>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}



// const elem = React.createElement('h2', null, "Hello World!!!")

ReactDOM.render(<App/>, document.getElementById('root'));
