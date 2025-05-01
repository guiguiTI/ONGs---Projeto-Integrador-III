import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";

export const layout = {
  areaId: "body",
  sortOrder: 1,
};

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="header">
        <div className="page-width flex justify-between">
          {/* Removido o coreComponents com 'icon-wrapper' para eliminar os ícones */}
          <Area id="header" noOuter />
        </div>
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
          <div>
            {/* Você pode remover ou manter os ícones de pagamento do footer conforme desejar */}
            {/* ... */}
          </div>
          <div className="self-center">
            <div className="copyright text-center md:text-right text-textSubdued">
              <span>Copyright © 2024 Central Das ONGs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
