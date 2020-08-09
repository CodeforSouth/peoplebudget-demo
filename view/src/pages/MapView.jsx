import React, { useContext } from 'react';
import Navbar from '../components/Navbar/index';
import MapViewComp from '../components/MapView/index'
import { Context } from '../store/store';

const MapView = () => {
    const {
        actions: { getMenus }
    } = useContext(Context);
    return (
        <main className="container-fluid m-0 p-0">
            <Navbar options={getMenus()} />
            <MapViewComp />
        </main>
    );
};

export default MapView;
