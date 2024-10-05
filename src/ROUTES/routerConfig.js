import routeNames from "./routeNames.js";
import CatalogHome from "../pages/CatalogHome";
import ProductDetail from "../pages/ProductDetail";

const routerConfig = [
    {
        path: routeNames.home,
        element: CatalogHome
  },
    {
        path: routeNames.product,
        element: ProductDetail
    },
]

export default routerConfig;