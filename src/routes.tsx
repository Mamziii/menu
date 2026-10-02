import Home from "./pages/Home";
import Caffe from "./pages/Caffe";
import Resturant from "./pages/Resturant";

const routes = [
  { path: "/coffe", element: <Home /> },
  { path: "/coffe", element: <Caffe /> },
  { path: "/fastfood", element: <Resturant /> },
];

export default routes;
