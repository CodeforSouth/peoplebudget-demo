import React, { useContext } from 'react';
import { Context } from '../store/store';
import Navbar from '../components/Navbar/index';
import GetStarted from '../components/GetStarted';
import Overview from '../components/Overview';
import Contributor from '../components/Contributors/index';
import Info from '../components/InfoSection/index';
import Footer from '../components/Footer/index';

const Home = () => {
    const {
        actions: { getMenus }
    } = useContext(Context);
    return (
        <div className={`p-0 container-fluid`}>
            <Navbar options={getMenus()} />
            <GetStarted /> 
            <Overview /> 
            <Contributor /> 
            <Info />
            <Footer />
        </div>
    );
};

export default Home;
