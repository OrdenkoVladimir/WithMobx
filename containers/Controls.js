import React, { useState } from 'react';


const Controls = ( {state} ) => {

  const [newUser, setNewUser] = useState({});

const handlerValueName = (e) => {
  setNewUser({
    ...newUser,
    name: e.target.value
  });
}

const handlerValueAge = (e) => {
    setNewUser({
      ...newUser,
      age: e.target.value
    });
  }

  const handlerValueCity = (e) => {
    setNewUser({
      ...newUser,
      city: e.target.value
    });
  }

const handlerSubmitUser = (e) => {
  e.preventDefault();
  state.addNewUser(newUser);
  setNewUser({});
}

  return (
    <form onSubmit={handlerSubmitUser} className="control">
        <input type="text" value={newUser.name || ""} onChange={handlerValueName} placeholder="name" />
        <input type="number" value={newUser.age || ""} onChange={handlerValueAge} placeholder="age" />
        <input type="text" value={newUser.city || ""} onChange={handlerValueCity} placeholder="City" />
        <button type="submit">Add User</button>
    </form>
  )
}

export default Controls;