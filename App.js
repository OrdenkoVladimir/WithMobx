import React from 'react';
import {  action, observable } from 'mobx';
import  Table  from '../src/containers/Table';
import Controls from '../src/containers/Controls';
import DeleteAllButton from '../src/containers/DeleteAllButton'
import './App.css';

const usersState = observable({
  users: [
    {
        name: 'Vasya',
        age: 15,
        city: 'Moscow'
    },
    {
        name: 'Sveta',
        age: 20,
        city: 'London',
    },
    {
        name: 'Egor',
        age: 13,
        city: 'Paris',
    },
    {
        name: 'Dima',
        age: 30,
        city: 'Barcelona',
    },
    {
        name: 'Kate',
        age: 33,
        city: 'Rostov',
  
    },
    {
        name: 'Nasty',
        age: 40,
        city: 'California',
    },
    {
        name: 'Fedor',
        age: 24,
        city: 'Novgorod',
    },
    {
        name: 'Kirill',
        age: 29,
        city: 'Kaliningrad',
    },
    {
        name: 'Alexander',
        age: 21,
        city: 'New York'
    },
  ],

 
  addNewUser(newUser)  {
    usersState.users = [
      ...usersState.users,
      newUser  
    ]
  },
  deleteAll() {
    usersState.users = []
  } 
},
{
  addNewUser: action,
  deleteAll: action,
})




const App = () => {
  return (
    <div className="users-box">
      <Table state={usersState} />
      <Controls state={usersState} />
      <DeleteAllButton state={usersState} />
    </div>
  );
}





 
export default App
