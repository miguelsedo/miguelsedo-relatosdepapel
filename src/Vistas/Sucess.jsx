import React, { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalCOntext } from "../components/GlobalContext";

export const PagoExitoso = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUpdateCesta } = useContext(GlobalCOntext);

  const totalValue = location.state?.total || 0;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setUpdateCesta([]);

    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 40);

    if (progress >= 100) {
      navigate("/");
    }

    return () => clearInterval(interval);
  }, [progress, navigate, setUpdateCesta]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>¡Pago realizado con éxito!</h1>
      <p>Gracias por tu compra. El total pagado es de:</p>
      <h2 style={{ color: "green" }}>{totalValue.toFixed(2)} €</h2>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
