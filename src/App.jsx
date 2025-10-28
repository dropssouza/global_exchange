import { use, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Coins from "./components/Coins/Coins.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("BRL");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://currency-conversion-srm9.onrender.com";

  async function calculate() {
    if (!value1) {
      alert("Type your value to convert!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/converter?moeda_origem=${currency1}&moeda_destino=${currency2}&valor=${value1}`
      );
      const data = await response.json();
      setValue2(data.valor_convertido);
    } catch (error) {
      console.error("Error during the conversion", error);
      alert("Error connecting to the server");
    }

    setLoading(false);
  }

  return (
    <>
      <Header />
      <Main ClassName="main">
        <Coins
          currency1={currency1}
          setCurrency1={setCurrency1}
          currency2={currency2}
          setCurrency2={setCurrency2}
          value1={value1}
          setValue1={setValue1}
          value2={value2}
        />

        <Button onClick={calculate} loading={loading} />
      </Main>
    </>
  );
}

export default App;
