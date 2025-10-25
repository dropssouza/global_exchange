export default function Coin({ CoinID, Value, children }) {
  return (
    <>
      <div id={CoinID} className="coins">
        <p>{Value}</p>
        <input
          class="valor_input"
          type="number"
          name="valor1"
          id="valor1"
          placeholder={
            CoinID === "coin1" ? "Enter the value here" : "Your result here"
          }
          disabled={CoinID === "coin2"}
        />
        <select id={CoinID} className="selects">
          <option value="USD">Dólar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="BRL">Real (BRL)</option>
          <option value="GBP">Libra (GBP)</option>
          <option value="JPY">Iene (JPY)</option>
        </select>
        {children}
      </div>
    </>
  );
}
