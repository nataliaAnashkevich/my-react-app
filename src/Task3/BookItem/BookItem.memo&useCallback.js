import { memo } from 'react';

function BookItem(props) {
    const editClickHandler = () => {
        props.onEditClicked && props.onEditClicked(props.target);
    }
    const deleteClickHandler = () => {
        props.onDeleteClicked && props.onDeleteClicked(props.target.id);
    }
    console.log('BookItem rendered!');

    return <li> Name: {props.target.bookName} Price: {props.target.bookPrice}
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
    </li>
}

export default memo(BookItem);
