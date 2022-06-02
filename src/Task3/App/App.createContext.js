import React, {useEffect, useState} from "react";
import BookList from '../BookList/BookList.createContext';
import Form from "../Form/Form.createContext";
import useBooks from '../Hooks/useBooks.createContext'
import Popup from "../Popup/Popup.createContext";
import BookListContext from '../createContext/bookListContext'

function App() {
    const {isLoading, error, bookList, getBooks, addBook, updateBook, deleteBook, clearError} = useBooks();
    const [editedItem, setEditedItem] = useState(null);

    useEffect(() => {
        getBooks();
    }, [])

    const dataAddHandler = (bookName, bookPrice) => { addBook(bookName, bookPrice) };

    const dataEditHandler = (itemToEdit) => {
        setEditedItem(itemToEdit);
    }

    const dataDeleteHandler = (bookId) => { deleteBook(bookId) };

    const dataUpdateHandler = (bookName, bookPrice) => {
        updateBook(editedItem, bookName, bookPrice);
        setEditedItem(null);
    }

    const LOADING_STYLES = {
        position: 'fixed',
        top: '20%',
        left: '20%',
        transform: 'translate(- 50%, -50%)',
        backgroundColor: 'lightblue',
        padding: '150px',
        zIndex: 1001
    }

    const errorModalConfirmHandler = () => {
        if (error && error.title === 'DB get error') {
            getBooks(); // if not on getBD = close
        }
        clearError();
    }

    console.log(error);

    return (
    <div className='App'>
        {
            isLoading && <div style={LOADING_STYLES}>Loading...</div>
        }
        {
            error && error.title && <Popup
                title={error.title}
                message={error.message}
                onCloseErrorPopup={errorModalConfirmHandler}
            />
        }
        <Form
            onDataAdd={dataAddHandler}
            onDataUpdate={dataUpdateHandler}
            targetItem={editedItem}
        />
        {/*<BookListContext.Provider value={{ bookList: bookList, onEditClicked: dataEditHandler, onDeleteClicked: dataDeleteHandler }}>*/}
        <BookListContext.Provider value={{ bookList: bookList, onEditClicked: dataEditHandler, onDeleteClicked: dataDeleteHandler }}>
            <BookList
            />
        </BookListContext.Provider>
    </div>
    );
}

export default App;
