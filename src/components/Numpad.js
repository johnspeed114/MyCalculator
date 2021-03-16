function Numpad({inputNum, operatorEval, removeNum, clearScreen}) {

    const numSet = ['7','8','9','/','4','5','6','*','1','2','3','-', '0','.','+'];
    return (
        <>

                
            <div className='firstLine'>
                <button className="deleteButtons1" onClick={() => removeNum()}>Del</button> {/*Ask: Why adding parameters on the lefthand side anything will give you a syntax error?*/}
                <button className="deleteButtons2" onClick={() => clearScreen()}>Clr</button> 
                <button className='equals' onClick={() => operatorEval()} >=</button>
            </div>
  
            <div className='numpadContainer'>
                {numSet.map((num) => {
                    if (num === '+' || num === '-' || num == '*' || num=== '/') {
                        return (<button className='operators' onClick={() => inputNum(num)} >{num}</button> )
                    }
                    else {
                        return (<button className='numpad' onClick={() => inputNum(num)} >{num}</button> )
                    } //js issues: anym function creates a wrapper for the inputNum
                } //Again, the map here is passing onclick's function results before the event happens. On the technical level, Im not sure what happened. Why is this exactly doing that?
                )}    
            </div>   
            
            
        </>
        )
}

export default Numpad;