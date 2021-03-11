function Operator ({inputOp, outputOp}) {
    const eachOperators = ['+', '-', '*', '÷'];

    return (
        <>
            {eachOperators.map((operator) => 
                {return (<button onClick= {(operator) => inputOp(operator)}>{operator}</button>)})}
            <button onClick {...(num) => outputOp(num)}>{'='}</button>
        </>
    )
}

export default Operator;