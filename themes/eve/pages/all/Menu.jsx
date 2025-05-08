import React from "react";

export default function Menu() {
  return (
    <nav className="w-full py-4 border-b">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-8">
        {/* Esquerda: Links com fonte aumentada */}
        <ul className="flex items-center space-x-10 justify-self-start">
          <li>
            <a className="text-lg font-medium hover:underline" href="/entrar">
              Entrar/Inscrever
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:underline" href="/sobre-nos">
              Sobre Nós
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:underline" href="/causas">
              Causas
            </a>
          </li>
        </ul>

        {/* Centro: Logo */}
        <div className="flex justify-center">
          <a href="/">
            <img
              src="/logoCO.png"
              alt="Logo Central das ONGs"
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Direita: Mantém apenas os ícones, remove o logo da Terra */}
        <div className="flex items-center space-x-6 justify-self-end">
          {/* Ícone de busca */}
          <a href="/buscar" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
          {/* Ícone de sacola */}
          <a href="/carrinho" aria-label="Carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
          {/* Ícone de usuário */}
          <a href="/perfil" aria-label="Perfil">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export const layout = {
  areaId: "header",
  sortOrder: 1,
};
