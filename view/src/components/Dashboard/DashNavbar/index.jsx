import React from 'react';
import DashNavButton from './DashNavButton/index';

const DashNavbar = ({ options, left = false, name }) => {
    const mapButtons = ({ options }) =>
        options.map((values, index) => (
            <DashNavButton key={`dash-nav-${name}-${index}`} left={left} {...values} />
        ));
    return (
        <div id="top" className="row">
            <div className={`col-sm-auto ${left ? 'mr-auto' : 'ml-auto'}`}>
                <div className="row ">
                    <div className="col-12 px-2">
                        {mapButtons(
                            options
                                ? { options, left }
                                : { options: [{ text: 'home', link: '/' }], left }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNavbar;
