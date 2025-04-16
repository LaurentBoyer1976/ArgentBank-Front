import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

console.log("Layout is rendering"); // Vérification

const Layout = () => {
  return (
    <div className="layout">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;