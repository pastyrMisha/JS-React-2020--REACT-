import React, {Component} from 'react';
import MyContext from './Context';

class Name extends Component {
    render() {
        return (                   
            <div className="name">
                My name is {this.context.name}, age {this.context.age}
            </div>
        )
    }
}


Name.contextType = MyContext;


export default Name;
 


// //Старый способ:

// import React from 'react';
// import MyContext from './Context';

// const Name = () => {
//     return (
//         <MyContext.Consumer>
//             {
//                 (value) => {
//                     return (                    
//                         <div className="name">
//                             My name is {value}
//                         </div>
//                     )
//                 }
//             }
//         </MyContext.Consumer>
//     )
// }

// export default Name;