import React, { useState, useContext } from 'react';
import { Context } from '../../../store/store';
import { bob, open, marker, pointer } from './index.module.css';

const Marker = (props) => {
    const {
        actions: { changeProjectId }
    } = useContext(Context);
    const [markerLable, enableMarkerLable] = useState(true);
    const markerLableHidden = {
        visibility: 'hidden',
        width: '250px',
        height: '250px',
        padding: '3px',
        color: 'black',
        backgroundColor: 'white',
        fontSize: '2rem',
        top: '-30vh',
        left: '-13vh',
        position: 'absolute'
    };
    const markerLableVisible = {
        width: '250px',
        height: '250px',
        padding: '3px',
        color: 'black',
        backgroundColor: 'white',
        fontSize: '2rem',
        top: '-29vh',
        left: '-12vh',
        position: 'absolute',
        zIndex: '2'
    };
    return (
        <>
            <div className={`container-fluid p-0`} style={{ position: 'relative' }}>
                <i
                    onClick={() => enableMarkerLable(!markerLable)}
                    className={`material-icons ${bob} ${pointer}`}
                    style={{
                        color: 'red',
                        fontSize: '2rem',
                        top: '-30px',
                        left: '-15px',
                        position: 'absolute',
                        zIndex: '1'
                    }}
                >
                    place
                </i>{' '}
                <div
                    className={`${marker} row rounded shadow  ${markerLable ? open : ''}`}
                    style={markerLable ? markerLableVisible : markerLableHidden}
                >
                    <div className="col">
                        <div className="row border-bottom">
                            <div className="col p-0" style={{ fontSize: '16pt' }}>
                                {props.title.length > 25
                                    ? props.title.substring(0, 25).trim().concat('...')
                                    : props.title}
                            </div>
                            <div
                                className="text-center rounded-circle p-0"
                                style={{
                                    backgroundColor: 'purple',
                                    height: '30px',
                                    width: '30px',
                                    position: 'relative'
                                }}
                            >
                                <i
                                    onClick={() => changeProjectId(1)}
                                    className={`material-icons ${pointer}`}
                                    style={{
                                        color: 'white',
                                        fontSize: '1.3rem',
                                        top: '4px',
                                        left: '4px',
                                        position: 'absolute'
                                    }}
                                >
                                    open_in_new
                                </i>{' '}
                            </div>
                            <div
                                className="text-center rounded-circle p-0"
                                style={{
                                    backgroundColor: 'red',
                                    height: '30px',
                                    width: '30px',
                                    position: 'relative'
                                }}
                            >
                                <i
                                    onClick={() => enableMarkerLable(!markerLable)}
                                    className={`material-icons ${pointer}`}
                                    style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        top: '3px',
                                        left: '3px',
                                        position: 'absolute'
                                    }}
                                >
                                    close
                                </i>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-auto"
                            style={{
                                overflowY: 'scroll',
                                overflowX: 'hidden',
                                height: '195px',
                                width: '261px'
                            }}
                        >
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marker;
