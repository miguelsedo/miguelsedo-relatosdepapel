import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalCOntext } from "../components/GlobalContext";
import { CestaPanel } from "../Vistas/CestaPanel";

export const NavBarSuperior = () => {
  const { cesta } = useContext(GlobalCOntext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to={"/"} className="navbar__link">
          Home
        </Link>
        <Link to={"/buscador"} className="navbar__link">
          Buscador
        </Link>
        <Link to={"/random"} className="navbar__link">
          Dame un libro
        </Link>
      </div>

      <div
        className="navbar__cart"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to={"/cesta"}
          className={`navbar__cart-link ${
            cesta.length > 0 ? "navbar__cart-link--filled" : ""
          }`}
        >
          🛒
          {cesta.length > 0 && (
            <span className="navbar__cart-count">{cesta.length}</span>
          )}
        </Link>
        {isHovered && <CestaPanel />}
      </div>
    </div>
  );
};
