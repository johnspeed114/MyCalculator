import { useState } from 'react';
import Header from './components/Header';
import Numpad from './components/Numpad';
import Operator from './components/Operator';

function App() {
  const [theNumber, setNumber] = useState('');

  const inputNum = (num) => setNumber(theNumber + num); //{} here, besides function blocks are pass properties (info) to other levels and components
  const inputOp = (oper) => {
    if(oper === '+') {
      const savedNum = parseFloat(theNumber);
      setNumber('');
      console.log(savedNum);
      //check later if theNumber without no inputs will it pretend to add/sub/divide with 0 or give an error due to no input
    }
  }
  return (
    <div className="container">
      <Header num={ theNumber } setNum= { setNumber }/>
      <ul>
        <Numpad inputNum={inputNum}/>
      </ul>
      <div>
        <Operator inputOp={inputOp}/>
      </div>
    </div>
  );
}

export default App;
