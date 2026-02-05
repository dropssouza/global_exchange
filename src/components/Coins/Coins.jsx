import Coin from "../Coin/Coin.jsx";
import useMedia from "use-media";
import divisor1 from "./images/img_convert.png";
import divisor2 from "./images/img_convert2.png";

export default function Coins({
  currencyOrigin,
  currencyDestination,
  originValue,
  destinationValue,
  setCurrencyOrigin,
  setCurrencyDestination,
  setValue1,
}) {
  function Partition({ Id }) {
    const isMobile = useMedia({ maxWidth: 780 });

    return <img src={isMobile ? divisor2 : divisor1} alt="Banner" id={Id} />;
  }

  return (
    <div className="Coins">
      <Coin
        CoinID="coin1"
        fromOrTo="FROM"
        coinValue={originValue}
        onValueChange={setValue1}
        currencySelected={currencyOrigin}
        onCurrencyChange={setCurrencyOrigin}
      ></Coin>
      <Partition Id="partition"></Partition>
      <Coin
        CoinID="coin2"
        fromOrTo="TO"
        coinValue={destinationValue}
        currencySelected={currencyDestination}
        onCurrencyChange={setCurrencyDestination}
        disabled
      ></Coin>
    </div>
  );
}
