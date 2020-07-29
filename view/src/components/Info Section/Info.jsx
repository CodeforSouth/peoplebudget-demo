import React from 'react';
import Card from '../Card/index';
import map from '../../miamiMapBW.png';
import style from './index.module.css';
import icon from '../../triangleIcon.png';

const Info = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/*LEFT COL*/}
                <div className="col-6 mx-auto p-0">
                    <img style={{ width: '100%', height: '60vh', border: '3px solid #ee9623' }} src={map}></img>
                </div>
                {/*RIGHT COL*/}
                <div className="col-6 mx-auto d-flex justify-content-center">
                    <Card
                        customClassName={style.Card}
                        transform="translate(-50%, -50%)"
                        height="100%"
                        width="100%"
                        top="50%"
                        left="50%"
                        radius="2em"
                        border
                        shadow
                    >
                        <div className="mx-auto" style={{ width: 'auto' }}>
                            <div className="row">
                                <div className="col text-center" style={{ margin: '25px' }}>
                                    {/*TITLE*/}
                                    <h3
                                        style={{
                                            color: '#104953',
                                            marginTop: '25px',
                                            marginBottom: '10px'
                                        }}
                                    >
                                        <b>Current Top Projects Rankings</b>
                                    </h3>
                                    <hr style={{ width: '100%', borderTop: '2px solid #ee9623' }} />
                                    {/*LIST OF PROJECTS*/}

                                    <div className="row">
                                        <div className="col-10 text-left pl-5">
                                            <span style={{ top: '1.5vh', position: 'relative' }}>
                                                Complete Maintenance on the Metrorail
                                            </span>
                                        </div>
                                        <div className="col-auto ml-auto pr-5">
                                            <div className="row">
                                                <div className="col-auto p-0">
                                                    <p
                                                        style={{
                                                            color: '#ee9623',
                                                            top: '1.5vh',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        48
                                                    </p>
                                                </div>
                                                <div className="col-auto p-0">
                                                    <img
                                                        className="d-block"
                                                        style={{
                                                            width: '14px',
                                                            top: '2.25vh',
                                                            position: 'relative'
                                                        }}
                                                        src={icon}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ width: '90%', borderColor: '#e2ddda' }} />
                                    </div>
                                    <div className="row">
                                        <div className="col-10 text-left pl-5">
                                            <span style={{ top: '1.5vh', position: 'relative' }}>
                                                Remodel Douglas Park Public Bathrooms
                                            </span>
                                        </div>
                                        <div className="col-auto ml-auto pr-5">
                                            <div className="row">
                                                <div className="col-auto p-0">
                                                    <p
                                                        style={{
                                                            color: '#ee9623',
                                                            top: '1.5vh',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        32
                                                    </p>
                                                </div>
                                                <div className="col-auto p-0">
                                                    <img
                                                        className="d-block"
                                                        style={{
                                                            width: '14px',
                                                            top: '2.25vh',
                                                            position: 'relative'
                                                        }}
                                                        src={icon}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ width: '90%', borderColor: '#e2ddda' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Info;
