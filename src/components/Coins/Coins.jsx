import Coin from "../Coin/Coin.jsx";

export default function Coins() {
  function Partition({ Id, ClassName }) {
    return (
      <div className={ClassName}>
        <img id={Id} src="/public/img_convert.png" alt="Partition" />
      </div>
    );
  }

  return (
    <div className="Coins">
      <Coin CoinID={"coin1"} Value={"FROM"}></Coin>
      <Partition Id="partition" className="img-wrapper"></Partition>
      <Coin CoinID={"coin2"} Value={"TO"}></Coin>
    </div>
  );
}
