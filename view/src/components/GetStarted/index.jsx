import React from 'react';
import { Link } from 'react-router-dom';
import { imageContainer, wrapper, button } from './index.module.css';

const GetStarted = () => {
    return (
        <div className={`${imageContainer}`}>
            <div className={`${wrapper}`}>
                <div>
                    <div>
                        <h1>People Budget</h1>
                        <hr />
                        <p>
                            <b>A civic engagement process for educating Miamians on budgeting</b>
                        </p>
                        <div className={`${button}`}>
                            <Link color="white" to="/register">
                                <button className='button' >Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GetStarted;
