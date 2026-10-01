import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
}

export default App;
