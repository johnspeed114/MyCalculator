function Operator ({inputOp}) {
    const eachOperators = ['+', '-', '*', '÷'];

    return (
        <>
            {eachOperators.map((operator) => 
                {return (<button onClick= {() => inputOp(operator)}>{operator}</button>)})}
        </>
    )
}

export default Operator;