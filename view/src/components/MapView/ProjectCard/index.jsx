import React, { useState } from 'react';
import {card} from   './index.module.css'

const ProjectCard = (props) => {
    return <div className={`col-10 mx-auto mb-3 ${card}`}>
        {props.title}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>;
};

export default ProjectCard;
