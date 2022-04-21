import './UserList.css';

function UserList(props) {
    return (
        <div className='UserList'>{props.children}</div>
    )
}

export default UserList;