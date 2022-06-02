import {useState, useEffect, useRef} from "react";
import Popup from "../Popup/Popup.useRef";

function Form(props) {
    const [confirmButtonName, setConfirmButtonName] = useState('Submit form');
    const [error, setError] = useState(null);

    const bookNameRef = useRef('');
    const bookPriceRef = useRef('');

    // Переменные не должны храниться отдельно - не по React! хранить в useState, др
    // let bookNameVal = bookNameRef.current.value;
    // let bookPriceVal = bookPriceRef.current.value;

    useEffect(() => {
        bookNameRef.current.focus();
    }, [])

    // const bookNameInputHandler = (event) => {
    //     bookNameVal = event.target.value;
    // }
    //
    // const bookPriceInputHandler = (event) => {
    //     bookPriceVal = event.target.value;
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const bookNameVal = bookNameRef.current.value;
        const bookPriceVal = bookPriceRef.current.value;

        if (bookNameVal !== '' && bookPriceVal > 0) {
            if(props.targetItem) {
                props.onDataUpdate(bookNameVal, bookPriceVal);
                setConfirmButtonName('Submit form');
            } else {
                props.onDataAdd(bookNameVal, bookPriceVal);
            }
            bookNameRef.current.value = '';
            bookPriceRef.current.value = '';
        } else {
            setError({ title: 'Submit error', message: `Fill required data!` });
        }
    }

    useEffect(() => {
        if(props.targetItem) {
            bookNameRef.current.value = props.targetItem.bookName;
            bookPriceRef.current.value = props.targetItem.bookPrice;
            setConfirmButtonName('Update item');
        }
    }, [props.targetItem])

    const closeErrorPopupHandler = () => {
        setError(false);
    }

    return (
        <>
            {
                error && <Popup
                    title={error.title}
                    message={error.message}
                    onCloseErrorPopup={closeErrorPopupHandler}/>
            }
            <form onSubmit={formSubmitHandler}>
                <label>
                    <p>Book name:</p>
                    <input type='text' ref={bookNameRef}/>
                </label>
                <label>
                    <p>Price:</p>
                    <input type='number' ref={bookPriceRef}/>
                </label>
                <br/>
                <input type='submit' value={confirmButtonName}/>
            </form>
        </>
    )
}

export default Form;