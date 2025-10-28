export default function Coin({
  CoinID,
  Value,
  value,
  onValueChange,
  currency,
  onCurrencyChange,
  disabled,
  children,
}) {
  return (
    <>
      <div id={CoinID} className="coins">
        <p>{Value}</p>
        <input
          className="valor_input"
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={
            CoinID === "coin1" ? "Enter the value here" : "Your result here"
          }
          disabled={disabled}
        />
        <select
          className="selects"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
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
