import Coin from "../Coin/Coin.jsx";
import useMedia from "use-media";

export default function Coins() {
  function Partition({ Id }) {
    const isMobile = useMedia({ maxWidth: 780 });

    return (
      <img
        src={isMobile ? "public/img_convert2.png" : "public/img_convert.png"}
        alt="Banner"
        id={Id}
      />
    );
  }

  return (
    <div className="Coins">
      <Coin CoinID={"coin1"} Value={"FROM"}></Coin>
      <Partition Id="partition"></Partition>
      <Coin CoinID={"coin2"} Value={"TO"}></Coin>
    </div>
  );
}
