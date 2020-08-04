import React, { useState } from 'react';
import { card } from './index.module.css';

const ProjectCard = (props) => {
    return (
        <div className={`col-10 mx-auto mb-3 ${card}`}>
            <div className="row">
                <div className='col-6'>{props.title}</div>
                <div className='col-6'>{props.views}</div>
                <div className='col-6'>{props.filter}</div>
                <div className='col-6'>{props.upvotes}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
