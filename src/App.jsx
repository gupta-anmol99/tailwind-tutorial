import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Pricing />
      </div>
    </>
  );
}

export default App;
