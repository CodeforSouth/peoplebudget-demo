import React from 'react';
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
                    <button className={Style.button}>
                         <h5><span class="material-icons">search</span> Search Topics</h5>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
