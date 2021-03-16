import { useState } from 'react';
import Header from './components/Header';
import Numpad from './components/Numpad';


function App() {
  const [theNumber, setNumber] = useState('');
  const [history, setHistory] = useState([]);
  const [actExpression, setExpression] = useState('');
  const [placement, setPlacement] = useState(-1); 
  const inputNum = (num) => {
    console.log(num);
    if (num ==='+' || num ==='-' || num==='*'|| num==='/') {
      setExpression(actExpression + num);
      setNumber(num);
    } else if (theNumber !== '' && actExpression === '') {
      setExpression(num);
      setNumber(num);
    }
    else {
      setExpression(actExpression + num);
      setNumber(theNumber + num);
    }
    }; //{} here, besides function blocks are pass properties (info) to other levels and components
  
  const operatorEval = () => {
    let varEval; 
    try {
      varEval = eval(actExpression).toFixed(2); 
      setHistory([...history, actExpression]);
    } catch (err) {
      varEval = ""; 
    } 
    setNumber(varEval);
    setExpression('');
    setPlacement(history.length + 1);
  };
  const removeNum = () => {
    if (theNumber.length === 1) {
      setPlacement(history.length);
    }
    setNumber(theNumber.slice(0, theNumber.length-1))
    setExpression(actExpression.slice(0, actExpression.length-1))
  }
  const clearScreen = () => {
    setNumber('');
    setExpression('');
    setPlacement(history.length);
    
  }

  const previousHistory = () => {
    
    let prevHistIdx=placement;
    if (placement > 0 ) {
      prevHistIdx = placement -1;
    }
    setPlacement(prevHistIdx);
    setNumber(history[prevHistIdx]); 
    setExpression(history[prevHistIdx]);
    //finished this condition block[NEED TO CHECK IF WORKS OR NOT!!] also how am suppose to trigger the button without a function
    
    // else if (placement >= (history.length-1)){
    //   console.log('it works')
    // }//need to put this in the down arrow button function
    
    
  }

  const nextHistory = () => {
    let nextHistIdx=placement;
    if (placement < history.length -1) {
      nextHistIdx = placement +1;
    }
    setPlacement(nextHistIdx);

    setNumber(history[nextHistIdx]); 
    setExpression(history[nextHistIdx]);
    
    
    
  }

  return (
    <div className="container">
      <Header num={ theNumber } setNum={ setNumber } previousHistory={previousHistory} nextHistory={nextHistory}/>
      <div className='subcontainer'>
        <div>
          <Numpad inputNum={inputNum} operatorEval={operatorEval} removeNum={removeNum} clearScreen={clearScreen}/>
        </div>
      </div>
    </div>
  );
}

export default App;
