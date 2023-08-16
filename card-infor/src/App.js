import "./index.css";
import Card from "./Card.js";

function App() {
    return (
        <div className="container">
            <Card
                imgSrc={cardData[0].image}
                name={cardData[0].name}
                description={cardData[0].description}
            />
        </div>
    );
}

const cardData = [
    {
        name: "Nguyễn Hoàng Phúc",
        description: "Tôi là phúc và tôi rất đẹp trai",
        image: "./spinaci.jpg",
    },
];

export default App;
