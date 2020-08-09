import React, { useContext } from 'react';
import { Context } from '../../../store/store';
import { bob, pointer, container } from './index.module.css';

const Marker = (props) => {
    const {
        actions: { changeProjectId }
    } = useContext(Context);
    return (
        <>
            <div className={`container-fluid p-0 ${container}`}>
                <div onClick={() => changeProjectId(props.id)} className={`${pointer}`}>
                    <div></div>
                </div>
                <div className={`rounded shadow-lg p-1 border`}>
                    {props.title.substring(0,45)}...
                </div>
            </div>
        </>
    );
};

export default Marker;
