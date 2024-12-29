import React from "react";
import { useRandomize } from "../components/useRandomize";
import { useNavigate } from "react-router-dom";

export const Random = () => {
  const randomBookDetails = useRandomize(); 
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/libro/${randomBookDetails}`); 
  };
  return (
    <div

    >
      <h1>¡Dame un libro!</h1>
      <button
        onClick={handleButtonClick}
        style={{
          marginTop: "20px",
        }}
      >
        Obtén una recomendación aleatoria
      </button>
    </div>
  );
};
