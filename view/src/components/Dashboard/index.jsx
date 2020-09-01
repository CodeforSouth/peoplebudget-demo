import React from 'react';
import { container, side, content, footer } from './index.module.css';
import DashboardLogo from './DashboardLogo/index';
import DashNavbar from './DashNavbar/index';
import Footer from './DashboardFooter/index';

const Dashboard = () => {
    return (
        <div className={`${container}`}>
            <div className={`${side}`}>
                <div className="container">
                    <div className="row">
                        <DashboardLogo />
                    </div>
                </div>
            </div>
            <div className={`${content}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pt-3">
                            <DashNavbar name={'dash-main-menu'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>Heading goes here</h3>
                        </div>
                        <div className="col-12">
                            <div className="contianer-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <DashNavbar
                                            name={'dash-sub-menu'}
                                            left
                                            options={[{ text: 'home', link: '/' }]}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pt-2">content pane</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${footer}`}>
                <div className="row">
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
