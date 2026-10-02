import Caffe from "./pages/Caffe";
import Resturant from "./pages/Resturant";

const routes = [
  { path: "/", element: <Caffe /> },
  { path: "/coffe", element: <Caffe /> },
  { path: "/fastfood", element: <Resturant /> },
];

export default routes;
