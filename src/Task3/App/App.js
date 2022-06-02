import BookList from '../BookList/BookList';
import React, {useState} from "react";
import Form from "../Form/Form";

const generateId = () => {
    return Math.floor(Math.random() * 1000);
}

function App() {
    const [data, setData] = useState([
        { id: 1, bookName: 'Book1', bookPrice: 138},
    ]);
    const [editedItem, setEditedItem] = useState(null);

    const dataAddHandler = (bookName, bookPrice) => {
        setData(prevState => [
            ...prevState,
            { id: generateId(), bookName: bookName, bookPrice: bookPrice},
        ])
    }

    const dataEditHandler = (itemToEdit) => {
        setEditedItem(itemToEdit);
    }

    const dataDeleteHandler = (bookId) => {
        setData((data) =>
            data.filter((bookItem) => bookItem.id !== bookId)
        )
    }

    const dataUpdateHandler = (bookName, bookPrice) => {
        const updatedBookIndex = data.findIndex((bookItem) => bookItem.id === editedItem.id);

        setData((data) =>
            data.map((item, index) =>
                index === updatedBookIndex ? {...item, bookName: bookName, bookPrice: bookPrice} : item,
            )
        )

        setEditedItem(null);
    }

    return (
    <div className='App'>
        <Form
            onDataAdd={dataAddHandler}
            onDataUpdate={dataUpdateHandler}
            targetItem={editedItem}
        />
        <BookList
            data={data}
            onEditClicked={dataEditHandler}
            onDeleteClicked={dataDeleteHandler}
        />
    </div>
    );
}

export default App;
