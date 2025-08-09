import React from "react";

import anaxaSprite from "../assets/anaxa_Sprite.png"; 
import cassySprite from "../assets/cassy_sprite.png";
import cipherSprite from "../assets/cipher_sprite.png";
import mydeiSprite from "../assets/mydei_sprite.png";
import phainonSprite from "../assets/phainon_sprite.png";
import tribbieSprite from "../assets/tribbie_sprite.png"; 
import hyacineSprite from "../assets/hyacine_sprite.png";
import aglaeaSprite from "../assets/aglaea_sprite.png";

const PixelSprites = () => {
  const sprites = [
    { img: anaxaSprite, top: "15%", left: "5%" },
    { img: cassySprite, top: "15%", right: "10%" },
    { img: cipherSprite, top: "35%", left: "5%" },
    { img: mydeiSprite, top: "60%", left: "5%" },
    { img: phainonSprite, bottom: "30%", right: "5%" },
    { img: tribbieSprite, top: "40%", right: "5%" },
    { img: hyacineSprite, bottom: "10%", right: "7%" },
    { img: aglaeaSprite, bottom: "10%", left: "8%" }
  ];

  return (
    <div className="pixel-sprites">
      {sprites.map((sprite, index) => (
        <img 
          key={index}
          src={sprite.img}
          alt="Chibi-chans!!"
          className="pixel-sprite"
          style={{
            top: sprite.top,
            left: sprite.left,
            right: sprite.right,
            bottom: sprite.bottom,
            animation: `float ${5 + index}s ease-in-out infinite ${index * 0.3}s`
          }}
        />
      ))}
    </div>
  );
};

export default PixelSprites;