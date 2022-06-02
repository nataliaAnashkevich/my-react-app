import React, { useState, useReducer } from "react";

import BookList from '../BookList/BookList.useReducer';
import Form from "../Form/Form.useReducer";

const generateId = () => {
    return Math.floor(Math.random() * 1000);
}

const initialState = [{ id: 1, bookName: 'Book1', bookPrice: 138}];

function reducer(state, action) {
    switch(action.type) {
        case 'addData':
            return [
                ...state,
                { id: generateId(), bookName: action.payload.bookName, bookPrice: action.payload.bookPrice},
            ]
        // case 'editData':
        //     return {
        //         state:
        //             state.map((item, index) =>
        //             index === action.payload.updatedBookIndex ? {...item, bookName: action.payload.bookName, bookPrice: action.payload.bookPrice} : item,
        //             )
        //     };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [data, setData] = useState([
    //     { id: 1, bookName: 'Book1', bookPrice: 138},
    // ]);
    const [editedItem, setEditedItem] = useState(null);

    const dataAddHandler = (bookName, bookPrice) => {
        dispatch({ type: 'addData', payload: { bookName, bookPrice }});
        // setData(prevState => [
        //     ...prevState,
        //     { id: generateId(), bookName: bookName, bookPrice: bookPrice},
        // ])
    }

    const dataEditHandler = (itemToEdit) => {
        setEditedItem(itemToEdit);
    }

    const dataDeleteHandler = (bookId) => {
        // setData((data) =>
        //     data.filter((bookItem) => bookItem.id !== bookId)
        // )
    }

    const dataUpdateHandler = (bookName, bookPrice) => {
        // console.log(`dataUpdateHandler state ${state}`);
        // const updatedBookIndex = state.findIndex((bookItem) => bookItem.id === editedItem.id);

        // dispatch({ type: 'editData', payload: { bookName, bookPrice, updatedBookIndex }});
        // setData((data) => [
        //     ...data.map((item, index) =>
        //         index === updatedBookIndex ? {...item, bookName: bookName, bookPrice: bookPrice} : item,
        //     )
        // ])
        // setEditedItem(null);
    }

    return (
    <div className='App'>
        <Form
            onDataAdd={dataAddHandler}
            onDataUpdate={dataUpdateHandler}
            targetItem={editedItem}
        />
        <BookList
            // data={data}
            data={state}
            onEditClicked={dataEditHandler}
            onDeleteClicked={dataDeleteHandler}
        />
    </div>
    );
}

export default App;
