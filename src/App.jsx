import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Coin from "./components/Coins/Coin.jsx";

function App() {
  return (
    <>
      <Header />
      <Main ClassName="main">
        <Coin CoinID={"coin1"}></Coin>
        <Coin CoinID={"coin2"}></Coin>
      </Main>
    </>
  );
}

export default App;
