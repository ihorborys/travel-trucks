import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader.jsx";
import { useDispatch } from "react-redux";
import { fetchCampers } from "./components/redux/campersOps.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CatalogDetailsPage = lazy(
  () => import("./pages/CatalogDetailsPage/CatalogDetailsPage.jsx"),
);
const Features = lazy(() => import("./components/Cast/Cast.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);
const HomeLayout = lazy(() => import("./layouts/HomeLayout/HomeLayout.jsx"));
const CatalogLayout = lazy(
  () => import("./layouts/CatalogLayout/CatalogLayout.jsx"),
);
const CatalogDetailsPageLayout = lazy(
  () =>
    import("./layouts/CatalogDetailsPageLayout/CatalogDetailsPageLayout.jsx"),
);

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={"/"} element={<HomeLayout />}>
            <Route index element={<HomePage />}></Route>
          </Route>
          <Route path={"/catalog"} element={<CatalogLayout />}>
            <Route path={"/catalog"} element={<CatalogPage />}></Route>
          </Route>
          <Route
            path={"/catalog/:camperId"}
            element={<CatalogDetailsPageLayout />}
          >
            <Route path={"/catalog/:camperId"} element={<CatalogDetailsPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
