import React, { useState } from 'react';
import {
    container,
    tray,
    handle,
    handleSVG,
    handlePolygon,
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
    return (
        <div className={`${tray}`} style={{ position: 'absolute' }}>
            <div className={`${handle}`}>
                <svg className={`${handleSVG}`}>
                    <polygon points="50,1 1,50 50,100" className={`${handlePolygon}`} />
                    Sorry, your browser does not support inline SVG.
                </svg>
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
                    <div className="col-6 ml-auto mr-0 p-0 border">
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
