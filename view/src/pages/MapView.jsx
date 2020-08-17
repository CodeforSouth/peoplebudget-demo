import React, { useContext } from 'react';
import Navbar from '../components/Navbar/index';
import MapViewComp from '../components/MapView/index';
import Popup from '../components/Popup/index';
import usePopup from '../components/usePopup/index';
import { Context } from '../store/store';

const MapView = () => {
    const { isShowing, toggle } = usePopup();

    window.onload = () => {
        if (!('hasPageLoadBefore' in localStorage)) {
            toggle();
            localStorage.setItem('hasPageLoadBefore', true);
        }
    };

    const {
        actions: { getMenus }
    } = useContext(Context);

    return (
        <main className="container-fluid m-0 p-0">
            <Navbar options={getMenus()} />
            <Popup isShowing={isShowing} hide={toggle} />
            <MapViewComp />
        </main>
    );
};

export default MapView;
