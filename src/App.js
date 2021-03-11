import { useState } from 'react';
import Header from './components/Header';
import Numpad from './components/Numpad';


function App() {
  const [theNumber, setNumber] = useState('');
  const [history, setHistory] = useState([]);
  const [actExpression, setExpression] = useState('');
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
      setHistory([...history, theNumber]);
    } catch (err) {
      varEval = ""; 
    } 
    setNumber(varEval);
    setExpression('');
  };
  const removeNum = (option) => {
    if (option === 'Del') {
      try {
        setNumber(theNumber.slice(0, theNumber.length-1))
        setExpression(actExpression.slice(0, actExpression.length-1))
      } catch(err) {
        setNumber('');
      }
    } else { 
      setNumber('');
      setExpression('');
    }
  }
  return (
    <div className="container">
      <Header num={ theNumber } setNum= { setNumber }/>
      <ul>
        <Numpad inputNum={inputNum} operatorEval={operatorEval} removeNum = {removeNum}/>
      </ul>
    </div>
  );
}

export default App;
