import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/CardComponents/Card.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';




function TheCard() {
    return (
        <div>
            <HeaderContainer />
            <CardContainer />
        </div>
    )
}


ReactDOM.render(<TheCard />, document.getElementById('root'));



