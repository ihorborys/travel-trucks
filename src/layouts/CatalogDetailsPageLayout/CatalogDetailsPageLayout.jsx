import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/MainNav/Navigation.jsx";

const CatalogDetailsPageLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default CatalogDetailsPageLayout;
