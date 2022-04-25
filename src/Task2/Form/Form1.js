// Form for testing

import './Form.css'
import { useState } from 'react';

function Form1() {
    const [bookName1, setBookName1] = useState('');
    const [bookPrice1, setBookPrice1] = useState('');

    const inputHandler1 = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        setBookName1(event.target.value);
    }

    const priceInputHandler1 = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        setBookPrice1(event.target.value);
    }

    const submitHandler1 = (event) => {
        alert('This is current bookName state: ' + bookName1 +
            ' This is current bookPrice state: ' + bookPrice1);
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler1}>
            <label>
                <p>Book name:</p>
                <input type='text' value={bookName1} onChange={inputHandler1}/>
            </label>
            <label>
                <p>Price:</p>
                <input type='number' value={bookPrice1} onChange={priceInputHandler1}/>
            </label>
            <br/>
            <input type='submit' value='Submit form'/>
        </form>
    )
}

export default Form1;