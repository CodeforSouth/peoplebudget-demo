import React, { useContext } from 'react';
import { Context } from '../store/store';
import Navbar from '../components/Navbar/index';
import Questions from '../components/FAQ_Questions/index';
import Footer from '../components/Footer/index';
import SearchBar from '../components/FAQPage';

const FAQ = () => {
    const {
        actions: { getMenus }
    } = useContext(Context);
    return (
        <div className={`p-0 container-fluid`}>
            <Navbar options={getMenus()} />
            <SearchBar/>
            <Questions/>
            
            {/* <Footer /> */}
        </div>
    );
};

export default FAQ;
