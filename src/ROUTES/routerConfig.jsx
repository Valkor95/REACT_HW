import routeNames from "./routeNames.js";
import CatalogHome from "../pages/CatalogHome/CatalogHome.jsx";


const routerConfig = [
    {
        path: routeNames.home,
        element: <CatalogHome />
  }
]

export default routerConfig;