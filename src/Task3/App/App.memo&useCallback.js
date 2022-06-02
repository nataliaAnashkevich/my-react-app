import React, { useState, useCallback } from "react";
import BookList from '../BookList/BookList.memo&useCallback';
import Form from "../Form/Form.memo&useCallback";

const generateId = () => {
    return Math.floor(Math.random() * 1000);
}

function App() {
    const [data, setData] = useState([
        { id: 1, bookName: 'Book1', bookPrice: 138},
    ]);
    const [editedItem, setEditedItem] = useState(null);
    const [flagState, setFlagState] = useState(false);

    const dataAddHandler = (bookName, bookPrice) => {
        setData(prevState => [
            ...prevState,
            { id: generateId(), bookName: bookName, bookPrice: bookPrice},
        ])
    }

    const dataEditHandler = useCallback(
        (itemToEdit) => {
            setEditedItem(itemToEdit);
        }, []
    )

    const dataDeleteHandler = useCallback(
        (bookId) => {
            setData((data) =>
                data.filter((bookItem) => bookItem.id !== bookId)
            )
        }, [data]
    )

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
    console.log('App rendered!');

    const clickHandler = () => {
        setFlagState((prevState) => {
            return !prevState
        });
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
        <button onClick={clickHandler}>click</button>
    </div>
    );
}

export default App;
