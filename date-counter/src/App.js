import { useState } from "react";
import "./App.css";

function App() {
    const [step, setStep] = useState(1);
    const [counter, setCounter] = useState(0);

    const today = new Date();
    const dateDisplay = new Date();
    dateDisplay.setDate(today.getDate() + counter);

    return (
        <div className="container">
            <header>
                <h1>Hello evernyan to Date Counter</h1>
            </header>
            <div className="component">
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                <p>Step: {step}</p>
                <button onClick={() => setStep((s) => s + 1)}>+</button>
            </div>

            <div className="component">
                <button onClick={() => setCounter((c) => c - step)}>-</button>
                <p>Counter: {counter} </p>
                <button onClick={() => setCounter((c) => c + step)}>+</button>
            </div>

            <div className="date">
                {counter} day(s) from today to{" "}
                {dateDisplay.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    weekday: "long",
                })}
            </div>
        </div>
    );
}

export default App;
