import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/buscador");
    }, 5000); 

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <header>
        <h1>Bienvenido a</h1>
        <h1>Relatos de Papel</h1>
      </header>
      <button
        onClick={() => {
          navigate("/buscador");
        }}
        style={{backgroundColor: "#28A745"}}
      >
        Busca tu libro
      </button>
    </div>
  );
};
