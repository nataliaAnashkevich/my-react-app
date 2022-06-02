import './Form.class.css'
import {useState} from "react";

function Form(props) {
    const [bookName, setBookName] = useState('');
    const [bookPrice, setBookPrice] = useState('');

    const formInputHandler = (event) => {
        const target = event.target;
        target.type === 'text' ? setBookName(event.target.value) : setBookPrice(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onDataAdding(bookName, bookPrice);
        setBookName('');
        setBookPrice('');
    }

    return (
        <form className='input-form' onSubmit={formSubmitHandler}>
            <label>
                <p className='input-form__input-name'>Book name:</p>
                <input type='text' value={bookName} onChange={formInputHandler}/>
            </label>
            <label>
                <p className='input-form__input-name'>Price:</p>
                <input type='number' value={bookPrice} onChange={formInputHandler}/>
            </label>
            <br/>
            <input className='submit-button' type='submit' value='Submit form'/>
        </form>
    )
}

export default Form;