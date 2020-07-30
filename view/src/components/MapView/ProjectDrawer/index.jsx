import React, { useState } from 'react';
import {
    container,
    tray,
    trayIn,
    trayOut,
    handle,
    filter,
    filterContainer,
    filterMenuOpen,
    filterMenuClose,
    list
} from './index.module.css';
const ProjectDrawer = () => {
    const [filterText, setFilterText] = useState('Location');

    const [isFilterOpen, setFilterMenu] = useState(false);
    const openFilter = () => setFilterMenu(!isFilterOpen);

    const [isTrayOpen, setTrayMenu] = useState(true);
    const openTray = () => setTrayMenu(!isTrayOpen);

    return (
        <div className={`${tray} ${isTrayOpen ? trayOut : trayIn}`}>
            <div className={`${handle}`} onClick={openTray}>
                <div></div>
            </div>
            <div className={`${container}`}>
                <div className="row">
                    <div className="col-6 border">
                        <h1>Projects</h1>
                    </div>
                    <div className="col-6 border">
                        <form action="">
                            <input type="text" className="form-control" />
                        </form>
                    </div>
                    <div className="col-6 ml-auto mr-0 p-0">
                        <div className={`${filterContainer}`} onClick={openFilter}>
                            <div className={`${filter}`}>
                                <div>
                                    Sort By: {filterText}
                                    <span className="material-icons">filter_alt</span>
                                </div>
                                <div
                                    className={`${isFilterOpen ? filterMenuOpen : filterMenuClose}`}
                                >
                                    <div>option a</div>
                                    <div>option b</div>
                                    <div>option c</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 border ${list}`}>
                        <div className="row">
                            <div className="col-10">Project</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDrawer;
