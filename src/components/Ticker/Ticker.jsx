import { useEffect, useState } from "react";
import "./Ticker.css";

export default function Ticker() {
  const [rates, setRates] = useState([]);
  const pairs = [
    "USD-BRL",
    "EUR-BRL",
    "ARS-BRL",
    "JPY-BRL",
    "BTC-BRL",
    "CAD-BRL",
    "GBP-BRL",
    "CHF-BRL",
    "AUD-BRL",
    "CNY-BRL",
    "ETH-BRL",
  ];

  async function fetchRates() {
    try {
      const response = await fetch(
        `https://economia.awesomeapi.com.br/last/${pairs.join(",")}`,
      );
      const data = await response.json();

      const formatted = pairs.map((pair) => {
        const key = pair.replace("-", "");
        return {
          pair,
          bid: Number(data[key].bid).toFixed(2),
        };
      });

      setRates(formatted);
    } catch (error) {
      console.error("Erro ao buscar cotações", error);
    }
  }

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // 30s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {[...rates, ...rates].map((rate, index) => (
          <div key={index} className="ticker-item">
            <span className="pair">{rate.pair}</span>
            <span className="price">R$ {rate.bid}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
