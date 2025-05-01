import React from "react";

function FeaturedCategories() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="mb-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">Doações</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Doação de Animais */}
        <div className="relative flex flex-col items-center">
          <img
            src="/pets.jpg"
            alt="Doação de Animais"
            className="w-full h-80 md:h-[400px] object-cover object-center rounded-2xl shadow-lg"
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6
              flex items-center justify-center
              px-6 py-3
              rounded-lg
              bg-white/80
              shadow
            "
          >
            <span className="text-lg md:text-xl font-bold text-gray-900 text-center">
              Animais
            </span>
          </div>
        </div>
        {/* Doação de Roupas */}
        <div className="relative flex flex-col items-center">
          <img
            src="/roupas.jpg"
            alt="Doação de Roupas"
            className="w-full h-80 md:h-[400px] object-cover object-center rounded-2xl shadow-lg"
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6
              flex items-center justify-center
              px-6 py-3
              rounded-lg
              bg-white/80
              shadow
            "
          >
            <span className="text-lg md:text-xl font-bold text-gray-900 text-center">
              Roupas
            </span>
          </div>
        </div>
        {/* Doação de Brinquedos Infantis */}
        <div className="relative flex flex-col items-center">
          <img
            src="/brinquedos-infantis.jpeg"
            alt="Doação de Brinquedos Infantis"
            className="w-full h-80 md:h-[400px] object-cover object-center rounded-2xl shadow-lg"
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6
              flex items-center justify-center
              px-6 py-3
              rounded-lg
              bg-white/80
              shadow
            "
          >
            <span className="text-lg md:text-xl font-bold text-gray-900 text-center">
              Brinquedos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
