import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const [pageState, setPageState] = useState("Startpage");

  return (
    <div className="App">
      <Header />
      <Body setPageState={setPageState} pageState={pageState} />
      <Footer pageState={pageState} setPageState={setPageState} />
    </div>
  );
}

export default App;
