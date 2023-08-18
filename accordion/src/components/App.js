import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="accordion">
        <Accordion data={faqs} />
      </div>
    </>
  );
}

function Accordion({ data }) {
  const [activeNumber, setActive] = useState(0);

  return (
    <>
      {data.map((item, i) => {
        return (
          <AccordionItem
            key={i}
            number={i}
            title={item.title}
            text={item.text}
            numberActive={activeNumber}
            onActive={setActive}
          />
        );
      })}
    </>
  );
}

function AccordionItem({ number, title, text, numberActive, onActive }) {
  const isOpen = numberActive === number;
  return (
    <>
      <div
        className={`accordion-item ${isOpen ? "active" : ""}`}
        onClick={() => onActive(() => number)}
      >
        <p className="number">
          {number + 1 < 10 ? 0 : ""}
          {number + 1}
        </p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

        {isOpen && <div className="content">{text}</div>}
      </div>
    </>
  );
}

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
