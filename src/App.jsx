import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Coins from "./components/Coins/Coins.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  return (
    <>
      <Header />
      <Main ClassName="main">
        <Coins />

        <Button />
      </Main>
    </>
  );
}

export default App;
