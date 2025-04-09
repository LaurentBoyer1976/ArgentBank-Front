import react from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';


const Layout = () => {
    return (
        <div className="layout">
        <Header />
        <main className="main bg-dark">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}

export default Layout;