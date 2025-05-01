import React from "react";

function Newsletter() {
  return (
    <section className="w-full py-12 bg-[#E8D5C4] flex justify-center">
      <div className="w-full max-w-xl rounded-2xl shadow-lg bg-white/90 px-6 md:px-12 py-10">
        <div className="mb-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Participe de Nossos Projetos
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg">
            Cadastre-se para receber informações sobre nossas ONGs e como ajudar!
          </p>
        </div>
        <form
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          onSubmit={e => e.preventDefault()}
        >
          <input
            className="w-full md:w-auto flex-1 border border-gray-300 rounded-lg px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#E8D5C4] transition"
            type="email"
            placeholder="Digite seu e-mail para participar"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#E8D5C4] text-gray-900 font-semibold text-base shadow transition hover:bg-[#d2bba0]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
