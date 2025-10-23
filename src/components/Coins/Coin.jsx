export default function Coin({ CoinID, children }) {
  return (
    <>
      <div id={CoinID} className="coins">
        <p>valor1</p>
        <input
          class="valor_input"
          type="number"
          name="valor1"
          id="valor1"
          placeholder="Exemplo: 115.80"
        />
        <select id={CoinID} class="selects">
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
