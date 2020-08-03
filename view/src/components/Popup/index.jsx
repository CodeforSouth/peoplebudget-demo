import React from 'react';
import ReactDOM from 'react-dom';
import {
    modal_overlay,
    modal_wrapper,
    modal,
    modal_header,
    modal_close_button
} from './index.module.css';

const Popup = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={modal_overlay}/>
    <div className={modal_wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={modal}>
        <div className={modal_header}>
          <button type="button" className={modal_close_button} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Need Help?
          Take the Tour!
          <button>Video Tour</button>
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Popup;