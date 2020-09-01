import React from 'react';
import DashNavButton from './DashNavButton/index';


const DashNavbar = (props) => {
    const mapButtons = (options) =>
        options.map((values, index) => <DashNavButton key={index} {...values} />);
    return (
        <div id='top' className="row" style={{ margin: '0px' }}>
            <div className="col-sm-auto ml-auto">
                <div className="row ">
                    {mapButtons(props.options ? props.options : [{ text: 'home', link: '/' }])}
                </div>
            </div>
        </div>
    );
};

export default DashNavbar;
