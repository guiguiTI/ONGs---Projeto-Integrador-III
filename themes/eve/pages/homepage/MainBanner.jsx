import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <section
      className="main-banner-home flex items-center justify-center min-h-[400px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('ONGs.jpeg')",
      }}
      aria-label="Banner principal de doações"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 py-16">
        <div className="flex flex-col justify-center items-center md:items-start text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Navegue pelas <span className="text-yellow-300">importantes doações</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow">
            Nos ajude a bater nossa meta de doações diárias e a doar o maior número de roupas, brinquedos e comida.
          </p>
          <a
            className="button button-primary bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded shadow transition"
            href="#"
          >
            SAIBA MAIS
          </a>
        </div>
        <div />
      </div>
    </section>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
