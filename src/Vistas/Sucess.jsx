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
    }, 30);

    if (progress >= 100) {
      navigate("/");
    }

    return () => clearInterval(interval);
  }, [progress, navigate, setUpdateCesta]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Pago realizado con éxito!</h1>
      <p>Gracias por tu compra. El total pagado es de:</p>
      <h2 style={{ color: "green" }}>{totalValue.toFixed(2)} €</h2>

      <div
        style={{
          marginTop: "30px",
          width: "70%",
          height: "10px",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#28A745",
            transition: "width 0.03s linear",
          }}
        ></div>
      </div>
    </div>
  );
};
