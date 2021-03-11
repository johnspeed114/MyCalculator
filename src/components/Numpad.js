function Numpad({inputNum, operatorEval, removeNum}) {
    
    const numSet = ['1','2','3','4','5','6','7','8','9','0','+', '-', '*', '/', '.'];
    return (
        <>
            {numSet.map((num) => {
                return (<button onClick={() => inputNum(num)} >{num}</button> ) //js issues: anym function creates a wrapper for the inputNum
            } //Again, the map here is passing onclick's function results before the event happens. On the technical level, Im not sure what happened. Why is this exactly doing that?
            )}       
            <button onClick={() => operatorEval()} >=</button>
            <div className="deleteButtons">
                <button onClick={() => removeNum('Del')}>Del</button> {/*Ask: Why adding parameters on the lefthand side anything will give you a syntax error?*/}
                <button onClick={() => removeNum()}>Clr</button> 
            </div>
            
        </>
        )
}

export default Numpad;