import React from 'react';
import { card,imgGrow } from './index.module.css';

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

    const showDetails = () => {
        if (props.details) {
            return (
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className={`col-12 ${imgGrow}`}>
                                <img
                                    src="https://via.placeholder.com/350"
                                    className={`img-fluid h-100 d-block mx-auto pt-2 pb-2`}
                                    alt=""
                                />
                            </div>
                            <div className="col-12">
                                <div className="row m-1">
                                    <div className="col-12 pl-3 pr-3 pt-1 pb-1">description:</div>
                                    <div className="col-12 p-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dicta eius voluptas, amet ea qui, ut, rem suscipit est
                                        architecto ipsum consectetur facere! Sequi ratione nulla
                                        delectus dolore, velit suscipit earum.
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col-12">
                                        Bugeter/contributor: {props.contributor}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" onClick={props.back}>
                        <div></div>
                    </div>
                    <div className="col-3 ml-auto">
                        <button className={`button`}>vote</button>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className={`col-10 mx-auto mb-3 ${card}`}>
            <div className="row mr-2 ml-2" onClick={props.onClick}>
                <div className="col-6">{props.title}</div>
                <div className="col-6">{numberToString(props.views)}</div>
                <div className="col-6">category type: {props.filter}</div>
                <div className="col-6">
                    {props.votes.up}
                    <span className="material-icons">thumb_up</span>
                    {props.votes.down}
                    <span className="material-icons">thumb_down</span>
                </div>
            </div>
            {showDetails()}
        </div>
    );
};

export default ProjectCard;
