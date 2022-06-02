const time = (seconds) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const tryThrowError = () => {
    if ((new Date()).getSeconds() % 10 < 3) {
        throw new Error('Bad request');
    }
}

function DataBase () {
    const DB_KEY = 'react_db';
    const getFromLocalStorage = () => JSON.parse(localStorage.getItem(DB_KEY) || '[]');
    // передавать уже то, что нужно сохранить
    // const setToLocalStorage = (data) => localStorage.setItem(DB_KEY, JSON.stringify(data));
    //
    // const updateLocalStorage = (data, editedItem, bookName, bookPrice) => {
    //     const updatedBookIndex = data.findIndex((bookItem) => bookItem.id === editedItem.id);
    //     localStorage.setItem(DB_KEY, JSON.stringify(data.map((item, index) =>
    //         index === updatedBookIndex ? {...item, bookName: bookName, bookPrice: bookPrice} : item)));
    // };
    //
    // const removeFromLocalStorage = (data, bookIDToRemove) => {
    //     localStorage.setItem(DB_KEY, JSON.stringify(data.filter((bookItem) => bookItem.id !== bookIDToRemove)));
    // };
    const setToLocalStorage = (item) => {
        const data = getFromLocalStorage();
        localStorage.setItem(DB_KEY, JSON.stringify([...data, item]));
    }
    const updateLocalStorage = (editedItem, bookName, bookPrice) => {
        const data = getFromLocalStorage();
        const updatedBookIndex = data.findIndex((bookItem) => bookItem.id === editedItem.id);
        localStorage.setItem(DB_KEY, JSON.stringify([...data.map((item, index) =>
            index === updatedBookIndex ? {...item, bookName: bookName, bookPrice: bookPrice} : item)]))
    }
    const removeFromLocalStorage = (bookIDToRemove) => {
        const data = getFromLocalStorage();
        localStorage.setItem(DB_KEY, JSON.stringify([...data.filter((bookItem) => bookItem.id !== bookIDToRemove)]));
    }

    const getBookList = async () => {
        await time(1);
        tryThrowError();
        return getFromLocalStorage();
    }

    const addBook = async (bookName, bookPrice) => {
        await time(1);
        tryThrowError();
        const newBook = {
            id: Math.random().toString(),
            bookName,
            bookPrice,
        };
        // const data = getFromLocalStorage();
        // setToLocalStorage([...data, newBook]);
        setToLocalStorage(newBook);
        return newBook;
        // what for we write return newBook?
    };

    const updateBook = async (editedItem, bookName, bookPrice) => {
        await time(1);
        tryThrowError();
        // const data = getFromLocalStorage();
        // updateLocalStorage([...data, editedItem, bookName, bookPrice]);
        updateLocalStorage(editedItem, bookName, bookPrice);
        return editedItem;
    };

    const deleteBook = async (bookIDToRemove) => {
        await time(1);
        tryThrowError();
        // const data = getFromLocalStorage();
        // removeFromLocalStorage([...data, bookIDToRemove]);
        removeFromLocalStorage(bookIDToRemove);
        return bookIDToRemove;
    }

    return { setToLocalStorage, addBook, updateBook, deleteBook, getBookList };
}

export default DataBase;