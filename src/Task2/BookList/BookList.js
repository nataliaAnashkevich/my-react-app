function BookList(props) {
    return (
        <ul>
            <p>Shop library:</p>
            {
                props.data.map(item => <li key={item.id}> Name: {item.bookName} Price: {item.price}</li>)
            }
        </ul>
    );
}

export default BookList;