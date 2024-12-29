import React, { useContext } from "react";
import libros from '../Data/libros.json';
import { GlobalCOntext } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";

export const VistaCesta = () => {
    
    const navigate = useNavigate();

    const { cesta, eliminarCesta, cestaTotal } = useContext(GlobalCOntext); 
    const getBookPrice = ([title, year]) => {
      const book = libros.find((libro) => libro.title === title && libro.year === year);
      return book ? book.price : "No disponible"; 
    };
  
    return (
      <div>
        <h1>Mi Cesta</h1>
        {cesta.length > 0 ? (
          <ul>
            {cesta.map(([title, year] ) => (
              <li >
                {title} ({year}) - <strong>Precio:</strong> {getBookPrice([title, year])} €
                <button
                style={{
                  marginLeft: "5px",
                  backgroundColor: "red", 
                  color: "white", 
                  borderRadius: "3px", 
                  padding: "5px 10px", 
                  cursor: "pointer", 
                }}
                
                onClick={() => eliminarCesta(title, year)}
              >
                Eliminar
              </button>
              </li>
            ))}
            <li>
                <h2><strong>Total:</strong> {cestaTotal} €</h2>
                <button onClick={() => {navigate("/checkout")}}>Finalizar compra</button>
            </li>
          </ul>
        ) : (
          <p>La cesta está vacía.</p>
        )}
      </div>
    );
  };