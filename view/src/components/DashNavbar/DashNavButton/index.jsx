import React from 'react';
import { Link } from 'react-router-dom';
import { links } from './index.module.css';

const DashNavButton = ({ text, link, color }) => {
    return (
        <div className={`text-center text-capitalize`}>
            
            <Link className={`${links}`} to={link}>
            <h6>
                {text}
                </h6>
            </Link>
            
            
        </div>
    );
};

export default DashNavButton;
