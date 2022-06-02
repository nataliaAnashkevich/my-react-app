import * as _ReactDOM from 'react-dom';
import React from "react";
import './Popup.css'


const MODAL_STYLES = {
    position: 'fixed',
    top: '20%',
    left: '20%',
    transform: 'translate(- 50%, -50%)',
    backgroundColor: 'lightblue',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export function Popup(props) {
    const closePopupHandler = () => {
        props.onCloseErrorPopup();
    }

    return _ReactDOM.createPortal(
        <div style={MODAL_STYLES}>
            {/*<p>{props.children}</p>*/}
            <p>Enter valid data!</p>
            <button onClick={closePopupHandler}>Close</button>
        </div>,
        document.getElementById('portal')
    )
}

export default Popup;