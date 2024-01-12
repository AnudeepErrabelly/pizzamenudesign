import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//data about pizza
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "$5",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "$10",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "$12",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "$12",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "$15",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "$18",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//Main parent component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header component
function Header() {
  return (
    <header className="header">
      <h1
        style={{
          color: "blue",
          fontSize: "36px",
          fontFamily: "Times New Roman, serif",
        }}
      >
        {" "}
        Da-vinci pizza
      </h1>
    </header>
  );
}

//Menu component
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic italian cuisine made by world famous chef disalino guenoz with
        best ingredients ever.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
}

//Pizza component creation to display it inside the root which is the App here.
function Pizza(props) {
  //if (props.soldOut) return null;
  return (
    <div className="pizza-card">
      <li className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.soldOut ? "sold out" : props.price}</span>
        </div>
      </li>
    </div>
  );
}

//Footer  component
function Footer() {
  // return <footer>{new Date().toLocaleTimeString()} curently open</footer>;
  const hour = new Date().getHours();
  const open_hrs = 3;
  const close_hrs = 15;
  const is_storeopen = hour >= open_hrs && hour <= close_hrs;
  alert(is_storeopen);

  const storestyle = {
    color: is_storeopen ? "green " : "red",
  };

  return (
    <>
      <marquee>
        <footer className="footer">
          {is_storeopen ? (
            <p style={storestyle}>store is open</p>
          ) : (
            <p style={storestyle}>
              {" "}
              store closed opens at {open_hrs}PM afternoon
            </p>
          )}
        </footer>
      </marquee>

      <footer className="footer">
        <span> App designed by Anudeep Errabelly</span>
        <br />
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
