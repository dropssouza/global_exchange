import './App.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Coin from './components/Coins/Coin.jsx';

function Banner() {
  return <img src="/public/img_convert.png" alt="Banner" />;
}

function App() {
  return (
    <>
      <Header />
      <Main ClassName="main">
        <Coin CoinID={'coin1'} Value={'FROM'}></Coin>
        <Banner></Banner>
        <Coin CoinID={'coin2'} Value={'TO'}></Coin>
        <div className="convert-button-container">
          <button className="convert-button">Converter</button>
        </div>
      </Main>
    </>
  );
}

export default App;
