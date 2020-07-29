import React from 'react';
import { grid, card, picture, heading1, information } from '../Overview/index.module.css';

const Overview = () => {
    return (
        <div className={`${grid}`}>
            <div className={`${picture}`}></div>
            <div className={`${card}`}>
                <div className={heading1}>
                    <h1>People Budget</h1>
                </div>
                <div className={information}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aut autem
                    reiciendis veritatis, rerum tempore alias aspernatur maxime quae architecto
                    nulla nemo laboriosam, recusandae magni provident ex dolorum, nobis ipsam.
                </div>
            </div>
        </div>
    );
};

export default Overview;
