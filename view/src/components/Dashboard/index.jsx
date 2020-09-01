import React from 'react';
import { container, side, content, footer } from './index.module.css';
import DashboardLogo from './DashboardLogo/index';
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
                        <div className="col-12 border py-5">menu</div>
                    </div>
                    <div className="row">
                        <div className="col-12 border">
                            <div className="contianer-fluid">
                                <div className="row">
                                    <div className="col-12">sub menu</div>
                                </div>
                                <div className="row">
                                    <div className="col-12">content pane</div>
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
