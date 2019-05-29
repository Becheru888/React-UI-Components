import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/CardComponents/Card.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


//Card components added here 

// function CardContainer() {
//     return (
//         <div className='card-content'>
//             <a href='https://www.reactjs.org'>
//             <h1>Get started with React</h1>
//             <p>React makes it painless to create interactive UIs.
//              Design simple view for each state in your aplication</p>
//              <p className='site'>Reactjs.org</p>
//              </a>
//         </div>
//     )
// }

// The full card



function TheCard() {
    return (
        <div>
            <HeaderContainer />
            <CardContainer />
        </div>
    )
}


ReactDOM.render(<TheCard />, document.getElementById('root'));



