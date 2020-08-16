import React, { useState, useContext } from 'react';
import Comments from '../components/CommentPanel/index';
import Map from '../components/Map/index';
import Marker from '../components/Map/Marker/index';
import Navbar from '../components/Navbar/index';
import { Projects, ProjectsList } from '../components/ProjectsList/index';
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
    }

    const {
        actions: { getMenus }
    } = useContext(Context);
    const [viewList, setViewList] = useState(true);

    return (
        <div className="container-fluid">
            <Navbar options={getMenus()} />
            <div className="row">
                <div className="col-12 mx-auto" style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
                    <Popup isShowing={isShowing} hide={toggle} />
                    <div className="row">
                        <div className="col-6">
                            {viewList ? (
                                <Map>
                                    <Marker
                                        lat={25.77}
                                        lng={-80.22}
                                        title="Fix roadsFix roadsFix roadsFix roadsFix roadsFix roads"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Perspiciatis nesciunt eum cum nemo repellendus, optio
                                            alias architecto voluptas neque, officiis sequi.
                                            Explicabo odit, officia sit error assumenda impedit?
                                            Necessitatibus, ducimus!
                                        </div>
                                    </Marker>
                                </Map>
                            ) : (
                                <Comments />
                            )}
                        </div>
                        <div className="col-6">
                            <Projects setViewList={setViewList} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapView;
