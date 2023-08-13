// need to forward ref if you are trying to use a function trigger with React Component
import React from 'react';
import Popup from 'reactjs-popup';
import "../scss/app.css"

export default () => (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            {' '}
            <div className="menu">
    <div className="menu-item"> Menu item 1</div>
    <div className="menu-item"> Menu item 2</div>
    <div className="menu-item"> Menu item 3</div>
   
    <div className="menu-item"> Menu item 4</div>
  </div>
          </div>
          <div className="actions">
           
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
    
  );

  