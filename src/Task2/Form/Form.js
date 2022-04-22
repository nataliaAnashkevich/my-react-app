import './Form.css'

function Form(props) {
    return (
        <form onSubmit={props.submitHandler}>
            <label>
                <p>Book name:</p>
                <input type='text' value={props.bookName} onChange={props.inputHandler}/>
            </label>
            <label>
                <p>Price:</p>
                <input type='number' value={props.bookPrice} onChange={props.inputHandler}/>
            </label>
            <br/>
            <input type='submit' value='Submit form'/>
        </form>
    )
}

export default Form;