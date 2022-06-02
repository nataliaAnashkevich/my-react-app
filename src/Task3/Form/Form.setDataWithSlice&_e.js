import {useState, useEffect} from "react";

function Form(props) {
    const [bookName, setBookName] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookId, setEditId] = useState('');
    const [confirmButtonName, setConfirmButtonName] = useState('Submit form');
    const [formMode, setMode] = useState('Add');

    const formInputHandler = (event) => {
        const target = event.target;
        target.type === 'text' ? setBookName(event.target.value) : setBookPrice(event.target.value);
    }



    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (bookName !== '' && bookPrice > 0) {
            if(formMode === 'Add') {
                props.onDataAdd(bookName, bookPrice);
            } else {
                props.onDataUpdate(bookId, bookName, bookPrice);
                setConfirmButtonName('Submit form');
                setMode('Add');
            }
            setBookName('');
            setBookPrice('');
        } else {
            props.onInvalidDataEntred(bookName, bookPrice);
                if (!bookName) {
                console.log('Enter valid book name!');
            }
                if (bookPrice <= 0) {
                console.log('Enter valid book price!');
            }
        }
    }

    useEffect(() => {
        if(props.targetItem) {
            setBookName(props.targetItem.bookName);
            setBookPrice(props.targetItem.bookPrice);
            setEditId(props.targetItem.id);
            setConfirmButtonName('Update item');
            setMode('Edit');
        }
    }, [props.targetItem])


    return (
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
    )
}

export default Form;