import routeNames from "./routeNames.js";
import CatalogHome from "../pages/CatalogHome/CatalogHome.jsx";
import ShoppingCart from "../pages/ShoppingCart/index.js";


const routerConfig = [
    {
        path: routeNames.home,
        element: <CatalogHome />
  },
    {
        path: routeNames.cart,
        element: <ShoppingCart />
    }
]

export default routerConfig;