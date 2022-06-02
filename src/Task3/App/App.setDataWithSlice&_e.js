import React, { useState } from "react";
import BookList from '../BookList/BookList.setDataWithSlice&_e';
import Form from "../Form/Form.setDataWithSlice&_e";

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

    const dataEditHandler = (_, itemToEdit) => {
        setEditedItem(itemToEdit);
    }

    const dataDeleteHandler = (_, bookId) => {
        setData((data) =>
            data.filter((bookItem) => bookItem.id !== bookId)
        )
    }

    const dataUpdateHandler = (bookId, bookName, bookPrice) => {
        const updatedBookIndex = data.findIndex((bookItem) => bookItem.id === bookId);

        setData((data) => [
            ...data.slice(0, updatedBookIndex),
            {
                ...data[updatedBookIndex],
                bookName: bookName,
                bookPrice: bookPrice,
            },
            ...data.slice(updatedBookIndex + 1)
        ])
    }

    const invalidDataEntredHandler = (bookName, bookPrice) => {
        if (!bookName) {
            console.log('Enter valid book name!');
        }
        if (bookPrice <= 0) {
            console.log('Enter valid book price!');
        }
        document.getElementById('portal').style.display='block';
    }


    return (
    <div className='App'>
        <Form
            onDataAdd={dataAddHandler}
            onDataUpdate={dataUpdateHandler}
            onInvalidDataEntred={invalidDataEntredHandler}
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
