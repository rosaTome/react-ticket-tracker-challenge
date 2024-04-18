import "./CounterContainer.scss";

import { useState } from "react"

type CounterContainerProps = {
    label: string;

}

const CounterContainer = ({label}: CounterContainerProps) => {
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

            <button className="button-increment" onClick={increment}>
                {label} 
            </button>
            <button className="button-decrement" onClick={decrement}>
                {label} -
            </button>

        </div>
    )
}

export default CounterContainer;
