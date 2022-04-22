import React, { useState} from "react";
import './UserItem.css';
import Card from "../Card/Card";

function UserItem(props) {
    const [level, setLevel ] = useState(props.level);

    const clickHandler = () => {
        setLevel((prevLevel) => prevLevel + 1);
    }

   return (
       <Card>
            <div className='UserItem'>{props.firstName} {props.lastName} {level}
                <button onClick={clickHandler}>Level Up!</button>
            </div>
       </Card>
    )
}



export default UserItem;