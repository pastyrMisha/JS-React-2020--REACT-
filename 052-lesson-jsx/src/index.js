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
  // const scr = '<script>alert("Error!")</script>'
  // return <h2>{scr}</h2> 
  // Не получится вставить вредоносный скрипт (!)
  return <h2>Hello World!</h2>
}

const Field = () => {
  const holder = "Enter here";
const styleField = {
  width: "300px"
}

  return <input 
              style={styleField}
              type="text" 
              placeholder= {holder} 
              autoComplete="" 
              className="first" 
              htmlFor="" /> //как label for
}

const Btn = () => {
  const text = "Log in";
  const logged = true;
  // const res = () => {
  // return "Log in, please";
  // }
  // Нельзя поместить объект {} (!)
  // const p = <p>Log in</p>
  return <button>{/*p*//*res()*/logged ? "Enter" : text}</button>
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
