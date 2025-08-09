import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

import anaxaSprite from "../assets/anaxa_Sprite.png";
import cassySprite from "../assets/cassy_sprite.png";
import cipherSprite from "../assets/cipher_sprite.png";
import mydeiSprite from "../assets/mydei_sprite.png";
import phainonSprite from "../assets/phainon_sprite.png";
import tribbieSprite from "../assets/tribbie_sprite.png";
import aglaeaSprite from "../assets/aglaea_sprite.png";
import hyacineSprite from "../assets/hyacine_sprite.png";

export default function Results({ character }) {
  const { name } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/"); 
    window.location.reload(); 
  };
  const characterSprites = {
    Phainon: phainonSprite,
    Anaxa: anaxaSprite,
    Mydei: mydeiSprite,
    Aglaea: aglaeaSprite, 
    Tribbie: tribbieSprite,
    Cipher: cipherSprite,
    Castorice: cassySprite, 
    Hyacine: hyacineSprite
  };

  return (
    <div className="results-container">
      <p>
        <strong>{name}</strong>, your character is: <strong>{character}</strong>
      </p>
      <div className="resulto">
        <img 
          src={characterSprites[character]} 
          alt={character}
          className="result-character"
        />
        <p>DAYUMMM thats a good one ! !</p>
      </div>
      <button className="retry-button" onClick={handleRetry}>
        Retry?
      </button>
    </div>
  );
}