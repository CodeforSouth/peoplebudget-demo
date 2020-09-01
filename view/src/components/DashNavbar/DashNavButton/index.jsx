import React from 'react';
import { Link } from 'react-router-dom';
import { links, leftspace } from './index.module.css';

const DashNavButton = ({ text, link, color }) => {
    return (
        <div className={`${leftspace}`}>
            <Link className={`${links}`} to={link}>
                <h6>{text}</h6>
            </Link>
        </div>
    );
};

export default DashNavButton;
