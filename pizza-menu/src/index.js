import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // modify css:
    // style={<object>}
    // example: style={{color: red}}
    return (
        <header className="header">
            <h1>Fast Reặct Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];

    return (
        // this <> is react fragment, it will wrapp all inside and
        // delete "<>" when rendering to UI
        <>
            <main className="menu">
                <h2>Our menu</h2>

                {pizzas.length > 0 ? (
                    <ul className="pizzas">
                        {pizzas.map((pizza) => {
                            return <Pizza pizzaObj={pizza} key={pizza.name} />;
                        })}
                    </ul>
                ) : (
                    <div>hehe</div>
                )}
            </main>
        </>
    );
}

function Pizza({ pizzaObj }) {
    return (
        // this one is react fragment too
        <React.Fragment>
            <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
                <img src={pizzaObj.photoName} alt={pizzaObj.name} />
                <div>
                    <h3>{pizzaObj.name}</h3>
                    <p>{pizzaObj.ingredients}</p>
                    <span>
                        {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
                    </span>
                </div>
            </li>
        </React.Fragment>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    // bussiness logic:
    // isOpen ? alert("Welcome") : alert("Dit me may, cut");

    return (
        <footer className="footer">
            {isOpen ? (
                <Order />
            ) : (
                <div>
                    Sorry, we're closed. Please comback in tomorrow in{" "}
                    {openHour} AM
                </div>
            )}
        </footer>
    );
}

function Order() {
    return (
        <div className="order">
            <p>We're still open</p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
