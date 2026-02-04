import { use, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Coins from "./components/Coins/Coins.jsx";
import Button from "./components/Button/Button.jsx";
import Ticker from "./components/Ticker/Ticker.jsx";

function App() {
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("BRL");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function calculate() {
    setError("");

    if (!currency1) {
      setError("Selecione a moeda desejada para continuar");
      return;
    }

    if (currency1 === currency2) {
      setError("A moeda de origem não pode ser igual à moeda de destino.");
      return;
    }

    if (!value1 || value1 <= 0) {
      setError("Informe um valor válido para conversão.");
      return;
    }

    setLoading(true);

    try {
      const URL = `https://economia.awesomeapi.com.br/last/${currency1}-${currency2}`;
      const response = await fetch(URL);
      const data = await response.json();

      const key = `${currency1}${currency2}`;
      const bid = Number(data[key].bid);

      const result = (value1 * bid).toFixed(2);
      setValue2(result);
    } catch (err) {
      setError("Erro ao buscar cotação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Ticker />
      <Header />
      <Main ClassName="main">
        <Coins
          currencyOrigin={currency1}
          setCurrencyOrigin={setCurrency1}
          currencyDestination={currency2}
          setCurrencyDestination={setCurrency2}
          originValue={value1}
          setValue1={setValue1}
          destinationValue={value2}
        />

        <Button onClick={calculate} loading={loading} />
        {error && <p className="errorMessage">{error}</p>}
      </Main>
    </>
  );
}

export default App;
