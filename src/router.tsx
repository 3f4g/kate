import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";

const MainPage = lazy(() => import("./pages/Main/MainPage"));
const ProjectPage = lazy(() => import("./pages/Project/ProjectPage"));
const ProjectPageView = lazy(() => import("./pages/ProjectView/ProjectView"));

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/kate" element={<MainPage />} />
          <Route path="kate/projects" element={<ProjectPage />} />
          <Route path="kate/projects/:id" element={<ProjectPageView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
