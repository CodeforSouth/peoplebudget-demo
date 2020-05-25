import React from 'react';
import Card from '../Card/index';
import { cardPosition, overview } from '../Overview/index.module.css';
import image from '../../AirlinesArena.jpg';

const Overview = () => {
    return (
        <div className="row p-0">
            <div className={`  col-4 p-0`}></div>
            <div className="col-8 p-0" style={{ height: '80vh' }}>
                <img className=" w-100 h-100" src={image} alt="" />
            </div>
            <div style={{ position: 'relative', height: '0px' }}>
                .
                <Card
                    customClassName={cardPosition}
                    height="50vh"
                    width="40vw"
                    top="-65vh"
                    left="10vw"
                    radius="2em"
                    border
                    shadow
                >
                    <div className="mx-auto p-3" style={{ width: 'auto' }}>
                        <div className="row">
                            <div
                                className="col text-center"
                                style={{
                                    fontSize: '2vw',
                                    fontSize: '2.5vh',
                                    overflow: 'hidden',
                                    height: '45vh',
                                    letterSpacing: '0.04rem'
                                }}
                            >
                                <h1 style={{ fontSize: '3vw', fontWeight: '800' }}>
                                    People Budget
                                </h1>
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quasi tempore totam vel dolorum modi commodi perferendis
                                        impedit nisi rerum excepturi necessitatibus, recusandae
                                        voluptatum unde, facilis, eum voluptatibus adipisci cumque
                                        deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Ipsum quae, rerum dicta quis consectetur perferendis
                                        tempore nam facere! Laborum laudantium praesentium et id
                                        repudiandae ut? Totam similique tempore qui incidunt!
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Overview;