import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import libros from "../Data/libros.json";
import { GlobalCOntext } from "../components/GlobalContext";

export const VistaLibro = () => {
  const { detalles } = useParams();
  const [title, author, year] = detalles.split("-");
  const { cesta, updateCesta } = useContext(GlobalCOntext);
  const [errorMessage, setErrorMessage] = useState(""); 

  const book = libros.find(
    (libro) =>
      libro.title === title &&
      libro.author === author &&
      libro.year === parseInt(year, 10)
  );

  const handleAñadirCesta = (libro) => {

    const exists = cesta.some(
      ([cTitle, cYear]) => cTitle === libro.title && cYear === libro.year
    );

    if (exists) {
      setErrorMessage(`El libro "${libro.title}" ya está en la cesta.`);
      return;
    }

    updateCesta([libro.title, libro.year]);
    
  };

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Año:</strong> {book.year}</p>
      <p><strong>Género:</strong> {book.genre}</p>
      <p><strong>Descripción:</strong> {book.description}</p>
      <p><strong>Precio:</strong> {book.price} €</p>

      {errorMessage && (
        <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
      )}

      <button onClick={() => handleAñadirCesta(book)}>Añadir a la cesta</button>
    </div>
  );
};
