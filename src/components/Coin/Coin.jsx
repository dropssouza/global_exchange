export default function Coin({
  CoinID,
  fromOrTo,
  coinValue,
  onValueChange,
  currencySelected,
  onCurrencyChange,
  disabled,
  children,
}) {
  return (
    <>
      <div id={CoinID} className="coins">
        <p>{fromOrTo}</p>
        <input
          className="valor_input"
          type="number"
          value={coinValue}
          onChange={
            onValueChange ? (e) => onValueChange(e.target.value) : undefined
          }
          placeholder={
            CoinID === "coin1" ? "Enter the value here" : "Your result here"
          }
          disabled={disabled}
        />
        <select
          className="selects"
          value={currencySelected}
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
