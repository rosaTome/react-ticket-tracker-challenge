import "./CounterContainer.scss";

import { useState } from "react";

type CounterContainerProps = {
    count: number; // Current count value
    increment: () => void; // Function to increment count
    decrement: () => void; // Function to decrement count
  };


const CounterContainer = ({}: CounterContainerProps) => {
    const [count, setCount] = useState(0); // initial state is 0

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    console.log('Count', count);

    return (
        <div className="counter-container">
            <h2> Counter {count}</h2>

            <button className="button-decrement" onClick={decrement}> -
            </button>

            <button className="button-increment" onClick={increment}> +
            </button>

            <div>
                <p>Count: {count}</p>
            </div>

        </div>
    )
}

export default CounterContainer;
