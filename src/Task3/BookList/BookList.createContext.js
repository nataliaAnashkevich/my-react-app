import { useContext } from "react";
import BookListContext from "../createContext/bookListContext";

import './BookList.css'
// import BookItem from '../BookItem/BookItem.createContext';

function BookList() {
    const { bookList, onEditClicked, onDeleteClicked} = useContext(BookListContext);
    return (
        <ul>
            <p>Shop library:</p>
            {
                bookList.map(item => <BookItem
                    key={item.id}
                    target={item}
                    onEditClicked={onEditClicked}
                    onDeleteClicked={onDeleteClicked}
                />) // передавать {...item} это то же, что id = item.id, bookName = item.bookName, bookPrice = item.bookPrice, etc. all params
            }
        </ul>
    );
}

function BookItem(props) {
    const editClickHandler = () => {
        props.onEditClicked && props.onEditClicked(props.target);
    }
    const deleteClickHandler = () => {
        props.onDeleteClicked && props.onDeleteClicked(props.target.id);
    }

    return <li> Name: {props.target.bookName} Price: {props.target.bookPrice}
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
    </li>
}

export default BookList;
