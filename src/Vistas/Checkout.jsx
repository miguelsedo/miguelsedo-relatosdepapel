import React, { useContext, useState } from "react";
import { GlobalCOntext } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";
import libros from '../Data/libros.json';

export const VistaCheckout = () => {
  const { cesta, cestaTotal, setUpdateCesta } = useContext(GlobalCOntext); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    iban: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePayment = () => {
    const { name, address, iban, cardExpiry, cardCVV } = formData;

    if (!name || !address || !iban || !cardExpiry || !cardCVV) {
      setMessage("Por favor, completa todos los campos obligatorios.");
    } else {
      setMessage(""); 
      setUpdateCesta([]);
      navigate("/pago-exitoso", { state: { total: cestaTotal } });
    }
  };

  const getBookPrice = ([title, year]) => {
    const book = libros.find((libro) => libro.title === title && libro.year === year);
    return book ? book.price : "No disponible"; 
  };

  return (
    <div>
      <h1>Finalizar Compra</h1>

      {message && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
          {message}
        </p>
      )}

      <h2>Resumen de tu Cesta</h2>
      <ul>
        {cesta.map(([title, year]) => (
          <li key={`${title}-${year}`}>
            {title} ({year}) - <strong>{getBookPrice([title, year])} €</strong>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> {cestaTotal} €</p>

      <h2>Dirección de Envío</h2>
      <form>
        <li>
          Nombre Completo:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </li>
        <br />
        <li>
          Dirección:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </li>
      </form>

      <h2>Detalles de Pago</h2>
      <form>
        <li>
          IBAN:
          <input
            type="text"
            name="iban"
            value={formData.iban}
            onChange={handleChange}
            required
          />
        </li>
        <br />
        <li>
          Fecha de Expiración:
          <input
            type="text"
            name="cardExpiry"
            value={formData.cardExpiry}
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </li>
        <br />
        <li>
          Código de Seguridad:
          <input
            type="text"
            name="cardCVV"
            value={formData.cardCVV}
            onChange={handleChange}
            required
          />
        </li>
      </form>

      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
};
