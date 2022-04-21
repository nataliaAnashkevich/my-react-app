import './App.css';
import UserItem from '../UserItem/UserItem';
import UserList from '../UserList/UserList';
import Card from '../Card/Card';
import React, {useState} from "react";

function App() {

    const [data, setData ] = useState(
        [
      {firstName: 'Name1', lastName: 'Last Name', level: 0},
      {firstName: 'Name2', lastName: 'Last Name2', level: 0},
      {firstName: 'Name3', lastName: 'Last Name3', level: 0},
    ]);

  function addElem() {
    setData(prevState => [
        ...prevState,
      {firstName: 'Name4', lastName: 'Last Name4', level: 0},
    ])
  }

  return (
    <div className='App'>
      <Card>
        <UserList>
          {
            data.map(item => <UserItem firstName={item.firstName} lastName={item.lastName} level={item.level}/>)
          }
          <button onClick={addElem}>Add extra item</button>
        </UserList>
      </Card>
    </div>
  );
}

export default App;
