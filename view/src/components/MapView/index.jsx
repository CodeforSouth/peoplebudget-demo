import React from 'react';
import Map from '../Map/index';
import Marker from '../Map/Marker/index';
import { container } from './index.module.css';
import ProjectDrawer from '../MapView/ProjectDrawer/index';
const MapView = () => {
    return (
        <div className={`${container}`}>
            <div>
                <Map>
                    <Marker
                        lat={25.77}
                        lng={-80.22}
                        title="Fix roadsFix roadsFix roadsFix roadsFix roadsFix roads"
                        id={1}/>
                </Map>
            </div>
            <div>
                <ProjectDrawer />
            </div>
        </div>
    );
};

export default MapView;
