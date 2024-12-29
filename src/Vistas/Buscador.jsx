import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import libros from '../Data/libros.json';
import { GlobalCOntext } from "../components/GlobalContext";

export const Searcher = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const { busqueda, setBusqueda } = useContext(GlobalCOntext);
  const [librosfiltrados, setlibrosfiltrados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const valorBusqueda = inputRef.current.value.toLowerCase();
    setBusqueda(valorBusqueda);
    const results = libros.filter((libro) =>
      libro.title.toLowerCase().includes(busqueda)
    );

    setlibrosfiltrados(results);
  };

  const handleVerLibro = (libro) => {
    const detalles = `${libro.title}-${libro.author}-${libro.year}`;
    navigate(`/libro/${detalles}`);
  };


  useEffect(() => {
    if (busqueda) {
      const results = libros.filter((libro) =>
        libro.title.toLowerCase().includes(busqueda)
      );
      setlibrosfiltrados(results);

      if (inputRef.current) {
        inputRef.current.value = busqueda; 
      }
    }
  }, [busqueda]);

  return (
    <div>
      <h1>Busca tu libro</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            ref={inputRef} 
            placeholder="Título del libro" 
            type="text" 
          />
          <button type="submit"
          >Buscar</button>
        </form>
      </div>

      <div>
        <h2>Resultados:</h2>
        {librosfiltrados.length > 0 ? (
          <ul>
            {librosfiltrados.map((libro, index) => (
              <li className="resultados-busqueda"
              style={{ cursor: "pointer" }}
              onClick={() => handleVerLibro(libro)}
              >
                <strong>
                  {libro.title}
                </strong> - {libro.author} ({libro.year}) - {libro.price} € 
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};
