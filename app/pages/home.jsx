import React from "react";
import PropTypes from "prop-types";
import Banner from "../components/banner";
import Features from "../components/features";


 const Home = () => {
    return (
        <main >
            <Banner/>
            <Features />
        </main>
    );
 }

Home.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
export default Home;