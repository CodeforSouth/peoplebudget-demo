import React from 'react';
import { Link } from 'react-router-dom';
import { links, leftspace, leftSpacer } from './index.module.css';

const DashNavButton = ({ text, link, color, left }) => {
    return (
        <div className={`${leftspace} ${left ? '' : leftSpacer}`}>
            <Link className={`${links}`} to={link}>
                <h6>{text}</h6>
            </Link>
        </div>
    );
};

export default DashNavButton;
