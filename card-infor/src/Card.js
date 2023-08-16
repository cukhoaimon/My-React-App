import "./index.css";

function Card(props) {
    const skillList = skillData.map((item) => (
        <li key={item.id} className="skill">
            <p>
                {item.name} <span>{item.emoji}</span>
            </p>
        </li>
    ));
    return (
        <div className="card">
            <img src={props.imgSrc} alt="Juicy pizza"></img>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="skillList">{skillList}</div>
        </div>
    );
}

export default Card;

const skillData = [
    {
        id: 1,
        name: "Java Spring Boot",
        emoji: "💕",
    },
    {
        id: 2,
        name: "Docker",
        emoji: "🐋",
    },
    {
        id: 3,
        name: "React",
        emoji: "😫",
    },
    {
        id: 4,
        name: "Tán gái",
        emoji: "🐧",
    },
];
