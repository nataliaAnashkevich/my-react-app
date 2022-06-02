import {useEffect, useReducer} from "react";
import Popup from "../Popup/Popup.useReducer";

const initialState = {
    bookName: '',
    bookPrice: '',
    confirmButtonName: 'Submit form',
    error: null,
};

// !!! в каждом case передавать полностью весь state, иначе не переданные значения перезатрутся
// Можно reducer держать в отдельном файле
function reducer(state, action) {
    switch (action.type) {
        case 'update_book_name':
            return { ...state, bookName: action.payload.bookName }
        case 'update_book_price':
            return { ...state, bookPrice: action.payload.bookPrice }
        case 'update_confirmButtonName':
            return { ...state, confirmButtonName: action.payload.confirmButtonName }
        case 'handle_item_update':
            return {
                ...state,
                bookName: action.payload.bookName,
                bookPrice: action.payload.bookPrice,
                confirmButtonName: action.payload.confirmButtonName }
        case 'reset_form_input_fields':
            return {
                ...state,
                bookName: action.payload.bookName,
                bookPrice: action.payload.bookPrice,
            }
        case 'closeErrorPopup':
            return {
                ...state,
                error: null }
        case 'setError':
            return {
                ...state,
                error: { title: 'Submit error', message: `Fill required data!` }}
        default:
            throw new Error('Invalid action type!');
    }
}

function Form(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [bookName, setBookName] = useState('');
    // const [bookPrice, setBookPrice] = useState('');
    // const [confirmButtonName, setConfirmButtonName] = useState('Submit form');
    // const [error, setError] = useState(null);

    // const formInputHandler = (event) => {
    //     const target = event.target;
    //     target.type === 'text' ? setBookName(event.target.value) : setBookPrice(event.target.value);
    // }

    const bookNameInputHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'update_book_name', payload: { bookName: event.target.value} })
    }

    const bookPriceInputHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'update_book_price', payload: { bookPrice: event.target.value} })
    }

    // const formSubmitHandler = (event) => {
    //     event.preventDefault();
    //     if (bookName !== '' && bookPrice > 0) {
    //         if(props.targetItem) {
    //             props.onDataUpdate(bookName, bookPrice);
    //             setConfirmButtonName('Submit form');
    //         } else {
    //             props.onDataAdd(bookName, bookPrice);
    //         }
    //         setBookName('');
    //         setBookPrice('');
    //     } else {
    //         setError(true);
    //     }
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(state.bookName, state.bookPrice);
        if (state.bookName !== '' && state.bookPrice > 0) {
            if(props.targetItem) {
                props.onDataUpdate(state.bookName, state.bookPrice);
                dispatch({ type: 'update_confirmButtonName', payload: { confirmButtonName: 'Submit form' }});
            } else {
                props.onDataAdd(state.bookName, state.bookPrice);
            }
            dispatch({type: 'reset_form_input_fields', payload: { bookName: '', bookPrice: '' }});
            // dispatch({type: 'update_book_name', payload: {bookName: ''}});
            // dispatch({type: 'update_book_price', payload: {bookPrice: ''}});
        } else {
            dispatch({ type: 'setError' })
        }
    };

    // useEffect(() => {
    //     if(props.targetItem) {
    //         setBookName(props.targetItem.bookName);
    //         setBookPrice(props.targetItem.bookPrice);
    //         setConfirmButtonName('Update item');
    //     }
    // }, [props.targetItem])

    useEffect(() => {
        if(props.targetItem) {
            dispatch({ type: 'handle_item_update', payload: {
                bookName: props.targetItem.bookName,
                bookPrice: props.targetItem.bookPrice,
                confirmButtonName: 'Update item'}
            });
            // dispatch({type: 'update_book_name', payload: {bookName: props.targetItem.bookName}});
            // dispatch({type: 'update_book_price', payload: {bookPrice: props.targetItem.bookPrice}});
            // dispatch({type: 'update_confirmButtonName', payload: {confirmButtonName: 'Update item'}});
        }
    }, [props.targetItem])

    // const closeErrorPopupHandler = () => {
    //     setError(false);
    // }
    const closeErrorPopupHandler = () => dispatch({ type: 'closeErrorPopup' });

    return (
        <>
            {
                state.error && state.error.title && <Popup
                    title={state.error.title}
                    message={state.error.message}
                    onCloseErrorPopup={closeErrorPopupHandler}/>
            }
            <form onSubmit={formSubmitHandler}>
                <label>
                    <p>Book name:</p>
                    <input type='text' value={state.bookName} onChange={bookNameInputHandler}/>
                </label>
                <label>
                    <p>Price:</p>
                    <input type='number' value={state.bookPrice} onChange={bookPriceInputHandler}/>
                </label>
                <br/>
                <input type='submit' value={state.confirmButtonName}/>
            </form>
        </>
    )
}

export default Form;