import React from 'react';
import { Link } from 'react-router-dom';
import { questionsContainer, title, div1, div2, div3, div4, temp } from './index.module.css';

const Questions = () => {
    return (
        <body>
            <section className={`${temp}`}></section>
            
            <section className={`${questionsContainer}`}>

                <div className={`${div1}`}>
                    <h3 className={`${title}`}>General</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio, sunt aliquid debitis laudantium fugit asperiores assumenda natus veritatis vero ab in animi? Ipsam veniam nostrum officiis! Sed, eveniet minus.</p>
                </div>

                <div className={`${div2}`}>
                    <h3 className={`${title}`}>Account</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio, sunt aliquid debitis laudantium fugit asperiores assumenda natus veritatis vero ab in animi? Ipsam veniam nostrum officiis! Sed, eveniet minus.</p>
                </div>

                <div className={`${div3}`}>
                    <h3 className={`${title}`}>How do I use People Budget?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio, sunt aliquid debitis laudantium fugit asperiores assumenda natus veritatis vero ab in animi? Ipsam veniam nostrum officiis! Sed, eveniet minus.</p>
                </div>

                <div className={`${div4}`}>
                    <h3 className={`${title}`}>Other</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio, sunt aliquid debitis laudantium fugit asperiores assumenda natus veritatis vero ab in animi? Ipsam veniam nostrum officiis! Sed, eveniet minus.</p>
                </div>
                
            </section>
        </body>
        
    );
};
export default Questions;