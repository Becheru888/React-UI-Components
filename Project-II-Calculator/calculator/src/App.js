import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumbersButtons from './components/ButtonComponents/NumberButton'
import './App.css';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <NumbersButtons />
    </div>
  );
};

export default App;
