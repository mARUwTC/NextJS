import React, { useState } from 'react';
import styles from '../styles/RandomNumber2.module.css'

function RandomNumber2() {

    const [max, setMax] = useState('?');
    const [rand, setRand] = useState('');

    const handleInput = (event) => {
        //console.log(event.target.value);
        setMax(event.target.value);
    }

    const condition = (event) => {
        if (max <= 1) {
            return (
                window.alert("Please enter a number bigger than one.")
            )
        }
        setRand(Math.floor(Math.random() * max) + 1)
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            return condition(event)
        }
    }

    const handleClick = (event) => {
        return condition(event)
    }

    return (
        <div className={styles.RandomNumber2}>
            Random number in 1-{max}
            <input type="text" placeholder='maximum number' onChange={handleInput} onKeyDown={handleKey}></input>
            <button onClick={handleClick}>GO</button>
            The number is: {rand}
        </div>
    )
}

export default RandomNumber2;