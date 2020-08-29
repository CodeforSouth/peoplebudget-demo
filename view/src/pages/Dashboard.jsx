import React from 'react';
import DashboardLogo from '../components/DashboardLogo';

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-1 border-right p-1">
                    <DashboardLogo/>
                </div>
                <div className="col-11 border p-1"></div>
            </div>
            <div className="row bg-light text-secondary">
                <div className="col-10 mx-auto border-top">
                    <div className="row">
                        <div className="col-12 text-capitalize">
                            <a href="https://github.com/CodeforSouth/peoplebudget" target="new">
                                people budget on GitHub
                            </a>
                        </div>
                        <div className="col-6">
                            <span className="font-weight-bold">
                                <a href="#">PeopleBudget.org</a>
                            </span>{' '}
                            is an open-source project delivered by{' '}
                            <span className="font-weight-bold">
                                <a href="#">code for south</a>
                            </span>{' '}
                            on behalf of the people for florida.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
