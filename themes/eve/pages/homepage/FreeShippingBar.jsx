import React from "react";

function FreeShippingBar() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden shadow px-6 md:px-16">
        {/* Primeira Seção */}
        <div className="min-h-[160px] px-6 md:px-12 py-10 flex flex-col items-start text-left border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">Doe Roupas</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Ajude famílias em situação de vulnerabilidade com doações de roupas.
          </p>
        </div>
        {/* Segunda Seção */}
        <div className="min-h-[160px] px-6 md:px-12 py-10 flex flex-col items-start text-left border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">Alimente uma Vida</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Contribua para nossos programas de doação de cestas básicas.
          </p>
        </div>
        {/* Terceira Seção */}
        <div className="min-h-[160px] px-6 md:px-12 py-10 flex flex-col items-start text-left bg-gray-50">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">Seja Voluntário</h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Participe de nossos projetos e faça a diferença na comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
