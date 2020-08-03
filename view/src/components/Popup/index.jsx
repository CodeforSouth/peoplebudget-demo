import React, { Component } from 'react';
import {
    modal,
    modal_content,
    close
} from './index.module.css';

const Popup = () => {
    const handleClick = (props) => {
     props.toggle();
     console.log("Popup opned");
    };
  

    return (
     <div className={modal}>
       <div className={modal_content}>
       <span className={close} onClick={handleClick}>&times;    </span>
       <p>I'm A Pop Up!!!</p>
      </div>
     </div>
    
    );

    };

  export default Popup;