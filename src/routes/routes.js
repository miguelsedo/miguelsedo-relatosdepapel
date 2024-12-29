import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../Vistas/Landing';
import { Searcher } from '../Vistas/Buscador';
import { VistaCesta } from '../Vistas/Cesta';
import { VistaLibro } from '../Vistas/Libro';
import { VistaCheckout } from '../Vistas/Checkout';
import { PagoExitoso } from '../Vistas/Sucess';
import { Random } from '../Vistas/randomize';


export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/buscador" element={<Searcher />} />
        <Route path="/cesta" element={<VistaCesta />} />
        <Route path="/checkout" element={<VistaCheckout/>} />
        <Route path="/libro/:detalles" element={<VistaLibro />} />
        <Route path="/pago-exitoso" element={<PagoExitoso />} />
        <Route path="/random" element={<Random />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
  );
};


