import { observer }  from 'mobx-react';
import React, { useState } from 'react';

const Table = ( {state} ) => {

    return (
        
      <tabel className="tabel">
          {state.users.length ?
          
          state.users.map((user) => 
          (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))
          :
          <tr>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>
        </tr>
          }
      </tabel>
    )
  }

  export default observer(Table);