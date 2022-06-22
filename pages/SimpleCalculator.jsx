import React, { useState } from 'react';
import { render } from 'react-dom';
import styles from '../styles/SimpleCalculator.module.css';

function SimpleCalculator() {
    const [ number1, setNumber1 ] =useState();
    const [ number2, setNumber2 ] =useState();
    const [ operator, setOperator ] =useState();
    var result = useState();

    const handleNum1 = (event) => {
        setNumber1(event.target.value);
    }
    const handleNum2 = (event) => {
        setNumber2(event.target.value);
    }

    function handleClick(event) {
        setOperator(event.target.value);
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            default:
                result = "Please enter a correct number or operator.";
        }
        console.log(result);
    }

    return (
        <>
         <div className={styles.SimpleCalculator}>
            <input type="text" name='number1' onChange={handleNum1} placeholder="" />
            <input type="text" name='operator' onChange={operator} placeholder="Operator +-*/" />
            <input type="text" name='number2' onChange={handleNum2} placeholder="" />
            <button onClick={handleClick}>GO</button>
            {result}
         </div>
        </>
    )
}

export default SimpleCalculator;