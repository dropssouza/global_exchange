import Coin from "../Coin/Coin.jsx";
import useMedia from "use-media";
import divisor1 from "./images/img_convert.png";
import divisor2 from "./images/img_convert2.png";

export default function Coins({
  currency1,
  currency2,
  value1,
  value2,
  setCurrency1,
  setCurrency2,
  setValue1,
}) {
  function Partition({ Id }) {
    const isMobile = useMedia({ maxWidth: 780 });

    return <img src={isMobile ? divisor2 : divisor1} alt="Banner" id={Id} />;
  }

  return (
    <div className="Coins">
      <Coin
        CoinID={"coin1"}
        Value={"FROM"}
        value={value1}
        onValueChange={setValue1}
        currency={currency1}
        onCurrencyChange={setCurrency1}
      ></Coin>
      <Partition Id="partition"></Partition>
      <Coin
        CoinID={"coin2"}
        Value={"TO"}
        value={value2}
        onValueChange={() => {}}
        currency={currency2}
        onCurrencyChange={setCurrency2}
        disabled={true}
      ></Coin>
    </div>
  );
}
