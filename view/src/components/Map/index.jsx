import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_KEY } from '../../constants/constants';

const Map = (props) => {
    return (
        <div className="row">
            <div
                className={`p-0`}
                style={{
                    width: '100%',
                    height: '95vh',
                    boxShadow: 'inset 0 5px 5px -5px #000000, inset 0 -5px 5px -5px #000000'
                }}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: MAP_KEY }}
                    defaultCenter={{
                        lat: 25.77,
                        lng: -80.22
                    }}
                    defaultZoom={11}
                >
                    {props.children}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;
