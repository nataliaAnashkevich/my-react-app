function BookItem(props) {
    const editClickHandler = (e) => {
        props.onEditClicked && props.onEditClicked(e, props.target);
    }
    const deleteClickHandler = (e) => {
        props.onDeleteClicked && props.onDeleteClicked(e, props.target.id);
    }

    return <li> Name: {props.target.bookName} Price: {props.target.bookPrice}
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
    </li>
}

export default BookItem;
