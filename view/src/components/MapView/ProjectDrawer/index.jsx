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
    list,
    search
} from './index.module.css';
import ProjectCard from '../ProjectCard/index';
const ProjectDrawer = () => {
    const [filterText, setFilterText] = useState('Location');

    const [isFilterOpen, setFilterMenu] = useState(false);
    const openFilter = () => setFilterMenu(!isFilterOpen);

    const [isTrayOpen, setTrayMenu] = useState(true);
    const openTray = () => setTrayMenu(!isTrayOpen);

    return (
        <div className={`${tray} ${isTrayOpen ? trayIn : trayOut}`}>
            <div className={`${handle}`} onClick={openTray}>
                <div></div>
            </div>
            <div className={`${container}`}>
                <div className="row pt-3 pr-2 pl-2">
                    <div className="col-6">
                        <h1>Projects</h1>
                    </div>
                    <div className="col-6">
                        <div className={`${search}`}>
                            <form>
                                <input type="text" className="form-control" />
                                <div>
                                    <span className="material-icons">search</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5 ml-auto mr-0 mt-4 mb-1 p-0 pr-3">
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
                    <div className={`col-12 ${list}`}>
                        <div className="row mt-3 mb-3">
                            {[...Array(25)].map((item, idx) => (
                                <ProjectCard title={`test ${idx}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDrawer;
