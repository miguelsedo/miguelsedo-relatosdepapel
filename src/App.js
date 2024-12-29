import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBarSuperior } from './components/NavBar';
import { AppRouter } from './routes/routes';
import { useState } from 'react';
import { GlobalCOntext } from './components/GlobalContext';
import libros from "./Data/libros.json";


function App() {


  const [cesta, setUpdateCesta] = useState([])
  const [busqueda, setBusqueda] = useState();

    
  const updateCesta = (nuevoLibro) => {
    setUpdateCesta((prevCesta) => [...prevCesta, nuevoLibro]);
  };

  const eliminarCesta = (title, year) => {
    setUpdateCesta((prevCesta) =>
      prevCesta.filter(([cTitle, cYear]) => cTitle !== title || cYear !== year)
    );
  };


  const cestaTotal = cesta.reduce((total, [title, year]) => {
    const book = libros.find((libro) => libro.title === title && libro.year === year);
    return total + (book?.price || 0);
  }, 0);

  
  
  
  return (
    <GlobalCOntext.Provider value={{cesta, updateCesta, setUpdateCesta, busqueda, setBusqueda, eliminarCesta, cestaTotal}}>
      <BrowserRouter>
      <div className="App">
        <NavBarSuperior/>
        <AppRouter/>
      </div>
      </BrowserRouter>
    </GlobalCOntext.Provider>
  );
}

export default App;
