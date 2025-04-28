import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

/**
 * @description Composant Layout qui sert de conteneur principal pour l'application.
 * @returns {JSX.Element} - Le composant Layout qui contient l'en-tête, le pied de page et le contenu principal de l'application.
 */


const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;