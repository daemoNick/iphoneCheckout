import React, { useState } from "react";

const PriceAndColor = ({ actionButton }) => {
  const [selectedColor, setSelectedColor] = useState("Black Titanium");
  const colors = [
    { name: "Black Titanium", hex: "#4E4E4E" },
    { name: "Natural Titanium", hex: "#F0E8DF" },
    { name: "Blue Titanium", hex: "#6E788E" },
    { name: "White Titanium", hex: "#F5F5F0" },
  ];
  const price = "$1,199";

  return (
    <div className="price-color-section">
      <h2>Price and Color Options</h2>
      <div className="price">
        <span>Starting at</span>
        <span className="amount">{price}</span>
      </div>
      <div className="color-options">
        <p>
          Color: <span>{selectedColor}</span>
        </p>
        <div className="color-picker">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`color-option ${
                selectedColor === color.name ? "selected" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
              aria-label={color.name}
            />
          ))}
        </div>
        <div className="action-btn">
          {actionButton && <div className="action-button">{actionButton}</div>}
        </div>
      </div>
    </div>
  );
};

export default PriceAndColor;
