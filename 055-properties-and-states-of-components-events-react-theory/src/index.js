import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// function WhoAmI(props) {
//   return (
//     <>
//       <h1>My name is {props.name}, surname — {props.surname}</h1>
//       <a href="{props.link}">My profile</a>
//     </>
//   )
// }

// Теперь деструктуризацией:

function WhoAmI({name, surname, link}) {
  return (
    <>
      <h1>My name is {name}, surname — {surname}</h1>
      <a href={link}>My profile</a>
    </>
  )
}

const All = () => {
  return (
  <>
  <WhoAmI name="John" surname="Smith" link="facebook.com "/>
  <WhoAmI name="Ivan" surname="Smith" link="vk.com "/>
  <WhoAmI name="Alex" surname="Shepard" link="facebook.com "/>
  </>
  )  
}

// ReactDOM.render(
//   <React.StrictMode>
//     <WhoAmI name="John" surname="Smith" link="facebook.com "/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<All/>,document.getElementById('root'));