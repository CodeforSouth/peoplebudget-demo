import React from 'react';
import { profileImg, profile, profileName } from '../ContributorProfile/index.module.css';

const ProfilePic = ({ image, name }) => {
    return (
        <div className={profile}>
            <img className={profileImg} alt="avatar" src={image} />
            <div className={profileName}>{name}</div>
        </div>
    );
};

export default ProfilePic;
