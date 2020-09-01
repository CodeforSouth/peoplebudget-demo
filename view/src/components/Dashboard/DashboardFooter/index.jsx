import React from 'react';
import Style from './index.module.css';

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    <div className={Style.hubLink}>
                        <u>
                            <a href="https://github.com/CodeforSouth/peoplebudget">
                                People Budget on GitHub{' '}
                            </a>
                        </u>
                    </div>
                    <div className={Style.budgetLink}>
                        <u>
                            <a href="PeopleBudget.org">PeopleBudget.org </a>
                        </u>
                        is an open-source project delivered
                    </div>
                    <div className={Style.southLink}>
                        by
                        <u>
                            <a href="https://codeforsouth.com/"> Code for South </a>
                        </u>
                        on behalf of the people of Florida
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
