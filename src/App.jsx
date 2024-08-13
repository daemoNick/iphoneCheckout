import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./index.css";
import IphoneSpecs from "./components/IphoneSpecs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PriceAndColor from "./components/PriceAndColor";
import Checkout from "./components/Checkout";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playOnce, setPlayOnce] = useState(false);
  const [resetFunction, setResetFunction] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleStart = () => {
    setIsPlaying(true);
    setPlayOnce(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setPlayOnce(false);
    setShowCheckout(false);
  };

  const handlePlayOnce = () => {
    setPlayOnce(true);
    setIsPlaying(false);
  };

  const handleReset = () => {
    return new Promise((resolve) => {
      console.log("handleReset called");
      if (resetFunction) {
        console.log("Resetting rotation");
        resetFunction();
        resolve();
      } else {
        console.log("No resetFunction set");
        resolve();
      }
    });
  };

  const addToCart = async () => {
    await handleReset();
    handlePlayOnce();
    setShowCheckout(true);
  };

  return (
    <>
      <header className="store-header">
        <h1>My Very Real Phone Store</h1>
      </header>
      <div className="pg-left">
        <IphoneSpecs />
      </div>
      <div className="pg-right">
        <PriceAndColor
          actionButton={
            <button className="add-to-cart" onClick={addToCart}>
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
            </button>
          }
        />
        {showCheckout && <Checkout />}
      </div>
      <div className="pg-btm">
        <button onClick={handleStart}>Start Animation</button>
        <button onClick={handleStop}>Stop Animation</button>
        <button onClick={handlePlayOnce}>Play Animation Once</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <Canvas camera={{ position: [5.4254, 4.184, 8.6363], fov: 30 }}>
        <color attach="background" args={["#F9F8F8"]} />
        <Experience
          isPlaying={isPlaying}
          playOnce={playOnce}
          onReset={(func) => {
            setResetFunction(() => func);
          }}
        />
      </Canvas>
    </>
  );
}

export default App;
