import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,size} from '@fortawesome/free-solid-svg-icons'
import Style from '../FAQPage/index.module.css';

const SearchBar = () => {
    return (
        <div className={Style.grid}>
            <div className={Style.title}>
                <h1>Frequently Asked Questions</h1>
                <h6>You can browse the topics below for the help you need</h6>
            </div>
            <div className={Style.image}>
                <div className={Style.search}>
                    <input type="text" placeholder="Describe your issue..." />
                    <button className={Style.button} ><FontAwesomeIcon icon={faSearch} size="2x"/> <h5>Search Topics</h5></button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
