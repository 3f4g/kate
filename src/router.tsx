import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";

const MainPage = lazy(() => import("./pages/Main/MainPage"));
const ExibitionsPage = lazy(() => import("./pages/Exibitions/ExibitionsPage"));
const ProjectPageView = lazy(() => import("./pages/ProjectView/ProjectView"));

export default function Router() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/kate" element={<MainPage />} />
              <Route path="kate/projects/:id" element={<ProjectPageView />} />
              <Route path="kate/exibitions" element={<ExibitionsPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
