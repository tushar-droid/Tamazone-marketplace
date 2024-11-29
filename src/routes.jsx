import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Category from "./Components/Category";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:prodid",
    element: <Product />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "categories",
    element: <Categories />,
  },
  {
    path: "categories/catid",
    element: <Category />,
  },
];

export default routes;
