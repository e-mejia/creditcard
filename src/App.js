import "./App.css";
import CreditCard from "./components/CreditCard";

function App() {
  const data = {
    name: "Eduardo Mejia",
    expiration: "08/27",
    card_number: [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1],
    bank_name: "Big Bank, Inc.",
  };

  return (
    <div className="App">
      <CreditCard {...data} />
    </div>
  );
}

export default App;
