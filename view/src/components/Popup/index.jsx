import React from 'react';
import ReactDOM from 'react-dom';
import {
    modal_overlay,
    modal_wrapper,
    modal,
    modal_content,
    modal_close_button,
    modal_help
} from './index.module.css';

const Popup = ({ isShowing, hide }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className={modal_overlay} />
                  <div className={modal_wrapper} aria-modal aria-hidden  role="dialog">
                      <div className={modal}>

                          <div className={modal_content}>
                              <button
                                  type="button"
                                  className={modal_close_button}
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={hide}
                              >
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              <div className={modal_help}>
                                  content
                              </div>
                          </div>

                      </div>
                  </div>
              </React.Fragment>,
              document.body
          )
        : null;

export default Popup;
