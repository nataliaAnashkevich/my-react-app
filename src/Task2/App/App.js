import './App.css';
import BookList from '../BookList/BookList';
import React, {useState} from "react";
import Form from "../Form/Form";

const generateId = () => {
    return Math.floor(Math.random() * 100);
}

function App() {
    const [bookName, setBookName] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [data, setData] = useState([]);

    const formInputHandler = (event) => {
        const target = event.target;
        target.type === 'text' ? setBookName(event.target.value) : setBookPrice(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        {
            setData(prevState => [
                ...prevState,
                {id: generateId(), bookName: bookName, price: bookPrice },
            ])
        }
        setBookName('');
        setBookPrice('');
    }

    return (
    <div className='App'>
        <Form
            submitHandler={handleFormSubmit}
            inputHandler={formInputHandler}
            bookName={bookName}
            bookPrice={bookPrice}
        />
        <BookList data={data}/>
    </div>
    );
}

export default App;
