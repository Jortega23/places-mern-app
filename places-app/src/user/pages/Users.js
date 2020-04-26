import React from 'react'
import UsersList from '../components/UsersList'
import Jesus from '../../images/profilepic.jpg'


const Users = () => {
  const USERS = [
    {
      id:'u1', 
      name:'Jesus Ortega', 
      image:Jesus, 
      places: 3 
    }
  ]

    return <UsersList items={USERS}/>
}
export default Users;