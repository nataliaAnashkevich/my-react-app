import './BookList.css'
import BookItem from '../BookItem/BookItem.setDataWithSlice&_e';

function BookList(props) {
    return (
        <ul>
            <p>Shop library:</p>
            {
                props.data.map(item => <BookItem
                    key={item.id}
                    target={item}
                    onEditClicked={props.onEditClicked}
                    onDeleteClicked={props.onDeleteClicked}
                />) // передавать {...item} это то же, что id = item.id, bookName = item.bookName, bookPrice = item.bookPrice, etc. all params
            }
        </ul>
    );
}

export default BookList;
