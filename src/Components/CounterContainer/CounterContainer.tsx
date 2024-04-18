import "./CounterContainer.scss";
import incr from "../../assets/images/increment.png"
import decr from "../../assets/images/decrement.png"

import { useState } from "react"



const CounterContainer = () => {
    const [count, setCount] = useState(0); // initial state is 0

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2> Counter {count}</h2>
            <img 
                src={incr} 
                alt="increment" 
                className="counter-container__increment"
                onClick={increment}
                />
            <img 
                src={decr} 
                alt="decrement" 
                className="counter-container__decrement"
                onClick={decrement}
                />

        </div>
    )
}

export default CounterContainer;