import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import Welcome from "../../components/Welcome/Welcome";
import Discover from "../../components/Discover/Discover";
import Gallery from "../../components/Gallery/Gallery";
import Help from "../../components/Help/Help";
import Footer from "../../components/Footer/Footer";

class Home extends Component
{
    render()
    {
        return (
            <div>
                <Header />
                <MainBanner />
                <Welcome />
                <Gallery />
                <Discover />
                <Help />
                <Footer />

            </div>
        );

        /**
         * render Home:
         *     <Header>
         *     <Gallery>
         *     <benefits>
         *     <ContactUs>
         *     <footer>
         **/
    }
}

export default Home;