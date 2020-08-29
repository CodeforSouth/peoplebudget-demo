import React from 'react';
import { container, map, table } from './index.module.css';

const Info = () => {
    return (
        <div className={container}>
            <div className={map}></div>
            <div className={table}>
                <h3>Current Top Projects Rankings</h3>
                <hr />
                <div>
                    <div>Complete Maintenance on the Metrorail</div>
                    <div>48</div>
                    <div></div>
                </div>
                <hr />
                <div>
                    <div>Remodel Douglas Park Public Bathrooms</div>
                    <div>32</div>
                    <div></div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Info;
