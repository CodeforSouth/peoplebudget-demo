import React from 'react';
import NavButton from './NavButton/index';


const Navbar = (props) => {
    const mapButtons = (options) =>
        options.map((values, index) => <NavButton key={index} {...values} />);
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

export default Navbar;
