/* eslint-disable react-refresh/only-export-components */
import DashboardGrid from "./DashboardGrid";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Inovasi } from "./tabelInovasi";
import { Penelitian } from "./tabelPenelitian";

export const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Container Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Container Konten */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header />

        {/* KONTEN YANG AKAN DI GANTIII */}
        <div className="pl-4">
          <DashboardGrid />
        </div>
        <div className="pl-4 py-4">
          <Penelitian />
        </div>
        <div className="pl-4 py-8">
          <Inovasi />
        </div>
      </div>
    </div>
  );
};
