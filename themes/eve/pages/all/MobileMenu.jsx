import React from "react";
import "./MobileMenu.scss";

export default function MobileMenu() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="main-menu-mobile self-center">
      <a
        className="menu-icon"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShow(!show);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
      {show && (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/sobre-nos">
              Sobre Nós
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/causas">
              Causas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ongs">
              ONGs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover:underline" href="/entrar">
              Entrar/Inscrever
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
