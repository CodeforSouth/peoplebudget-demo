import React from 'react';
import { wrapper, gridItems, firstCol, secondCol, thirdCol, Copyright } from './index.module.css';

const footer = () => {
    return (
        <>
            <div className={wrapper}>
                <div className={gridItems}>
                    <div className={firstCol}>
                        <h5 className="title">Site Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#">Projects</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Feed</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Proposals</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                    <div className={secondCol}>
                        <h5 className="title">Connect</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#">Facebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Instagram</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Twitter</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                    <div className={thirdCol}>
                        <h5 className="title">Contact</h5>
                        <ul>
                            <li className="list-unstyled">
                                <span>Address:</span>
                            </li>
                            <li className="list-unstyled">
                                <span>1234 SW 12 St.</span>
                            </li>
                            <li className="list-unstyled">
                                <span>Miami, FL 33133</span>
                            </li>
                            <li className="list-unstyled">
                                <span>(305)123-4567</span>
                            </li>
                            <li className="list-unstyled">
                                <span>email@email.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={Copyright}>
                <div className="row">
                    <div className="col">
                        &copy; {new Date().getFullYear()} Copyright:{' People Budget'}
                    </div>
                </div>
            </div>
        </>
    );
};
export default footer;
