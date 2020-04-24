import React from 'react'
import UserItem from './UserItem'
import './UsersList.css'

const UsersList = (props) => {
  if(props.items.length === 0){
    return( <div>
      <h2>No Users Found.</h2>
    </div>
    )
  }

  return <ul>
    {props.item.map(user => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        placeCount={user.places} 
      />
    ))}
  </ul>
};
export default UsersList;