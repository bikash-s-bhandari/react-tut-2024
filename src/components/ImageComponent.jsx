import React, { useState } from "react";
import FirstImage from "../assets/1.jpg";
import SecondImage from "../assets/2.jpg";
const ImageComponent = () => {
  const [useFirstLogo, setUseFirstLogo] = useState(true);
  return (
    <div>
      <div>
        <h2>Render image static</h2>
        <img
          src={FirstImage}
          alt="First"
          style={{ width: "50%", height: "50%" }}
        />
        <img src={SecondImage} alt="Second" />
      </div>

      <div>
        <h2>Rendering Images Dynamically</h2>
        <img
        src={useFirstLogo ? FirstImage : SecondImage}
        alt="Dynamic Logo"
        width="200"
        height="200"
      />
      <button onClick={() => setUseFirstLogo(!useFirstLogo)}>
        Toggle Logo
      </button>
      </div>
    </div>
  );
};

export default ImageComponent;
