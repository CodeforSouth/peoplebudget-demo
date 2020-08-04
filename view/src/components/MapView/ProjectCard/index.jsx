import React, { useState } from 'react';
import { card } from './index.module.css';

const ProjectCard = (props) => {
    const numberToString = (number) => {
        const len = number.toString().length;
        if (len <= 4) {
            return number.toString();
        } else if (len > 4 && len <= 6) {
            return `${number.toString() / 1000}K`;
        } else if (len > 6) {
            return `${number.toString() / 1000000}M`;
        }
    };

    return (
        <div className={`col-10 mx-auto mb-3 ${card}`}>
            <div className="row mr-2 ml-2">
                <div className="col-6">{props.title}</div>
                <div className="col-6">{numberToString(props.views)}</div>
                <div className="col-6">{props.filter}</div>
                <div className="col-6">{props.upVotes}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
