import BookList from '../BookList/BookList';
import React, {useState} from "react";
import Form from "../Form/Form";

const generateId = () => {
    return Math.floor(Math.random() * 100);
}

function App() {
    const [data, setData] = useState([]);

    const dataAddingHandler = (bookName, bookPrice) => {
        setData(prevState => [
            ...prevState,
            { id: generateId(), bookName: bookName, price: bookPrice },
        ])
    }

    return (
    <div className='App'>
        <Form
            onDataAdding={dataAddingHandler}
        />
        <BookList data={data}/>
    </div>
    );
}

export default App;
