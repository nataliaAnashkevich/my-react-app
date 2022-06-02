import {useState, useEffect} from "react";
import Popup from "../Popup/Popup.createContext";

function Form(props) {
    const [bookName, setBookName] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [confirmButtonName, setConfirmButtonName] = useState('Submit form');
    const [error, setError] = useState(null);

    const formInputHandler = (event) => {
        const target = event.target;
        target.type === 'text' ? setBookName(event.target.value) : setBookPrice(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (bookName !== '' && bookPrice > 0) {
            if(props.targetItem) {
                props.onDataUpdate(bookName, bookPrice);
                setConfirmButtonName('Submit form');
            } else {
                props.onDataAdd(bookName, bookPrice);
            }
            setBookName('');
            setBookPrice('');
        } else {
            setError(true);
            // props.onInvalidDataEntred(bookName, bookPrice);
            //     if (!bookName) {
            //     console.log('Enter valid book name!');
            // }
            //     if (bookPrice <= 0) {
            //     console.log('Enter valid book price!');
            // }
        }
    }

    useEffect(() => {
        if(props.targetItem) {
            setBookName(props.targetItem.bookName);
            setBookPrice(props.targetItem.bookPrice);
            setConfirmButtonName('Update item');
        }
    }, [props.targetItem])

    const closeErrorPopupHandler = () => {
        setError(false);
    }

    return (
        <>
            {
                error && <Popup onCloseErrorPopup={closeErrorPopupHandler}></Popup>
            }
            <form onSubmit={formSubmitHandler}>
                <label>
                    <p>Book name:</p>
                    <input type='text' value={bookName} onChange={formInputHandler}/>
                </label>
                <label>
                    <p>Price:</p>
                    <input type='number' value={bookPrice} onChange={formInputHandler}/>
                </label>
                <br/>
                <input type='submit' value={confirmButtonName}/>
            </form>
        </>
    )
}

export default Form;