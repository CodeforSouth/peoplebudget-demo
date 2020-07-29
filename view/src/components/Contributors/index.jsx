import React from 'react';
import ProfilePic from './ContributorProfile';
import {
    contributorsGrid,
    contributor,
    container,
    title,
    contributorBox
} from '../Contributors/index.module.css';
const faker = require('faker');

const Contributor = () => {
    const contributorArr = (profiles) => {
        return profiles.map((profile, index) => (
            <ProfilePic name={faker.name.findName()} image={faker.image.avatar()} />
        ));
    };
    return (
        <>
            <div className={container}>
                <div className={contributorsGrid}>
                    <div className={title}>
                        <p>Top Contributors of City of Miami</p>
                    </div>
                    <div className={contributorBox}>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>
                        <div className={contributor}>{contributorArr([1])}</div>

                    </div>
                </div>
            </div>

        </>
    );
};
export default Contributor;
