import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <nav id="App--card">
        <Header />
        <Main />
      </nav>
    </div>
  );
}

export default App;
