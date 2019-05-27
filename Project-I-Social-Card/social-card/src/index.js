import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/CardComponents/Card.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
// import CardContainer from './components/CardComponents/CardContainer';


function CardContainer() {
    return (
        <div className='card-content'>
            <a href='https://www.reactjs.org'>
            <img src='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png' className='react-pic'></img>
            <h1>Get started with React</h1>
            <p>React makes it painless to create interactive UIs.
             Design simple view for each state in your aplication</p>
             <a href='#'>Reactjs.org</a>
             </a>
        </div>
    )
}

function TheCard() {
    return (
        <div>
            <HeaderContainer />
            <CardContainer />
        </div>
    )
}


ReactDOM.render(<TheCard />, document.getElementById('root'));



