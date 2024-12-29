import React, { useContext } from "react";
import libros from '../Data/libros.json';
import { GlobalCOntext } from '../components/GlobalContext';

export const CestaPanel = () => {
  const { cesta, cestaTotal } = useContext(GlobalCOntext);

  const getBookPrice = ([title, year]) => {
    const book = libros.find((libro) => libro.title === title && libro.year === year);
    return book ? book.price : "No disponible";
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        right: "0",
        backgroundColor: "white",
        width: "400px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h2>Mi Cesta</h2>
      {cesta.length > 0 ? (
        <ul>
          {cesta.map(([title, year]) => (
            <li style={{ marginBottom: "10px" }}>
              {title} ({year}) - {getBookPrice([title, year])} €
            </li>
          ))}
          <li style={{ fontWeight: "bold", marginTop: "10px" }}>
            Total: {cestaTotal} €
          </li>
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
          La cesta está vacía.
        </p>
      )}
    </div>
  );
};
