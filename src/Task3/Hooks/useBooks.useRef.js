import { useState } from "react";
import DataBase from "../Services/dataBase.useRef";

const db = DataBase();
// const initialState = db.getBookList().then(r => console.log(r));

const useBooks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bookList, setBookList] = useState([]);

    const getBooks = () => {
        setIsLoading(true);

        db.getBookList()
            .then(setBookList)
            .catch(() => setError({ title: 'DB get error', message: 'Cannot get books from db' }))
            .then(() => {
                setIsLoading(false);
            });
    }

    const addBook = (bookName, bookPrice) => {
        setIsLoading(true);

        db.addBook(bookName, bookPrice)
            .then((newBook) => setBookList([...bookList, newBook]))
            .catch(() => setError({ title: 'DB add error', message: 'Cannot add book to db'}))
            .then(() => setIsLoading(false));
    }
    const updateBook = (editedItem, bookName, bookPrice) => {
        setIsLoading(true);
        const updatedBookIndex = bookList.findIndex((bookItem) => bookItem.id === editedItem.id);

        db.updateBook(editedItem, bookName, bookPrice)
            .then(() => setBookList([...bookList.map((item, index) =>
                index === updatedBookIndex ? {...item, bookName: bookName, bookPrice: bookPrice} : item)]))
            .catch(() => setError({ title: 'DB update error', message: 'Cannot update book in db'}))
            .then(() => setIsLoading(false));
    }

    const deleteBook = (bookIdToRemove) => {
        setIsLoading(true);
        db.deleteBook(bookIdToRemove)
            .then((bookIdToRemove) => setBookList((bookList) => bookList.filter((bookItem) => bookItem.id !== bookIdToRemove)))
            .catch(() => setError({ title: 'DB delete error', message: 'Cannot delete book from db'}))
            .then(() => setIsLoading(false));
    }

    const clearError = () => {
        setError(null);
    }

    console.log(bookList);
    console.log(`error in useBooks: ${error}`);

    return {
        isLoading,
        error,
        bookList,
        getBooks,
        addBook,
        updateBook,
        deleteBook,
        clearError
    }
}

export default useBooks;