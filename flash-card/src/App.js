import { useState } from "react";
import "./App.css";

export default function App() {
    const cardQuestion = [
        {
            id: 1,
            question: "Toi co dep trai ko",
            answer: "co",
        },
        {
            id: 2,
            question: "Cu toi co thom ko",
            answer: "rat thom",
        },
        {
            id: 3,
            question: "Gà chiên nước mắm",
            answer: "juicy mọng nước",
        },
        {
            id: 4,
            question: "Chuối hay bưởi",
            answer: "đu đủ",
        },
        {
            id: 5,
            question: "Ai đã đặt tên cho dòng sông?",
            answer: "tao",
        },
    ];

    return (
        <>
            <h1>Hello everyan</h1>
            <div className="container">
                {cardQuestion.map((card) => (
                    <Card card={card} id={card.id} />
                ))}
            </div>
        </>
    );
}

function Card({ card }) {
    const [showAns, setDisplay] = useState(false);

    return (
        <button onClick={() => setDisplay(!showAns)}>
            {showAns ? card.answer : card.question}
        </button>
    );
}
