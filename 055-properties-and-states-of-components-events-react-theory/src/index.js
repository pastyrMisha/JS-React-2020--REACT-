import React, {Component} from 'react';
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

// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//       <h1>My name is {name}, surname — {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }

// const All = () => {
//   return (
//   <>
//   <WhoAmI name="John" surname="Smith" link="facebook.com "/>
//   <WhoAmI name="Ivan" surname="Smith" link="vk.com "/>
//   <WhoAmI name="Alex" surname="Shepard" link="facebook.com "/>
//   </>
//   )  
// }

// В стиле ООП с счетчиком:

class WhoAmI extends Component {
  constructor(props) {
    super(props); // Суперконструктор; нашего Component
    this.state = {
      years: 26
    }
    
    this.nextYear = this.nextYear.bind(this); //1-ый способ привязать контекст this.nextYear
    // this.nextYear = () => { // 2-ый способ; использовать стрелочную функцию (this ссылается на объект,в котором вызван)
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }
  }

// 3-ий способ (новый class fields) Позволяет записывать наши св-ва и методы вне нашего конструктора:
// Даже state можно так записывать вне конструктора:

// state = {
//   years: 26
// }


//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

  


  nextYear() {
    // this.state.years++; так прямым образом мы не можем менять state
    this.setState(state => ({
      years: ++state.years
    }))
  }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname — {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
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