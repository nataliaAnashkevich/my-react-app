import * as _ReactDOM from 'react-dom';
import React from "react";
import './Popup.css'


const MODAL_STYLES = {
    position: 'fixed',
    top: '20%',
    left: '20%',
    transform: 'translate(- 50%, -50%)',
    backgroundColor: 'lightgreen',
    padding: '50px',
    zIndex: 1000
}

export function Popup(props) {
    const closePopupHandler = () => {
        props.onCloseErrorPopup();
    }

    console.log(props);
    return _ReactDOM.createPortal(
        <div style={MODAL_STYLES}>
            <p>{props.title}</p>
            <p>{props.message}</p>
            <button onClick={closePopupHandler}>Close</button>
        </div>,
        document.getElementById('portal')
    )
}

export default Popup;