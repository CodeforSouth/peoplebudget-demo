import React, { useState, useContext } from 'react';
import { Context } from '../../../store/store';
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
    const {
        actions: { changeProjectId },
        store: { selectedProjectId }
    } = useContext(Context);

    const [searchInput, setSearch] = useState('');
    const searchTitles = (e) => setSearch(e.target.value);

    const [filterText, setFilterText] = useState('Location');
    const [isFilterOpen, setFilterMenu] = useState(false);
    const openFilter = () => setFilterMenu(!isFilterOpen);
    const setFilter = (e) => setFilterText(e.target.innerHTML);

    const [isTrayOpen, setTrayMenu] = useState(false);
    if (selectedProjectId !== null && isTrayOpen === false) {
        setTrayMenu(!isTrayOpen);
    }
    const openTray = () => setTrayMenu(!isTrayOpen);

    const viewDetails = (index) => () => {
        setSearch('');
        changeProjectId(index);
    };
    const listProjects = () => {
        const returnVal = [...Array(25)]
            .map((item, idx) => (
                <ProjectCard
                    key={`projectcard-${idx}`}
                    details={selectedProjectId === idx}
                    title={`test ${idx}`}
                    views={22000}
                    filter={'location'}
                    votes={{ up: 100, down: 100 }}
                    onClick={viewDetails(idx)}
                    back={() => changeProjectId(null)}
                    contributor={'test'}
                />
            ))
            .filter((item, idx) => {
                if (selectedProjectId === null) {
                    return true;
                } else {
                    return selectedProjectId === idx;
                }
            })
            .filter(({ props }, idx) => {
                if (searchInput === '') {
                    return true;
                } else {
                    if (selectedProjectId !== null) changeProjectId(null);
                    return props.title.includes(searchInput);
                }
            });

        return returnVal.length > 0 ? (
            returnVal
        ) : (
            <div className="col-12 text-center">no results</div>
        );
    };

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
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={searchTitles}
                                />
                                <div>
                                    <span className="material-icons">search</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5 ml-auto mr-0 mt-1 mb-1 p-0 pr-3">
                        <div className={`${filterContainer}`} onClick={openFilter}>
                            <div className={`${filter}`}>
                                <div>
                                    Sort By: {filterText}
                                    <span className="material-icons">filter_alt</span>
                                </div>
                                <div
                                    className={`${isFilterOpen ? filterMenuOpen : filterMenuClose}`}
                                >
                                    <div onClick={setFilter}>option a</div>
                                    <div onClick={setFilter}>option b</div>
                                    <div onClick={setFilter}>option c</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 ${list}`}>
                        <div className="row mt-3 mb-3">{listProjects()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDrawer;
