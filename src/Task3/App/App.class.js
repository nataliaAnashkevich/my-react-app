import React, {useState} from "react";
import BookList from '../BookList/BookList.class';
import Form from "../Form/Form.class";

const generateId = () => {
    return Math.floor(Math.random() * 100);
}

function App() {
    const [data, setData] = useState([]);

    const dataAddingHandler = (bookName, bookPrice) => {
        setData(prevState => [
            ...prevState,
            { id: generateId(), bookName: bookName, bookPrice: bookPrice },
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
