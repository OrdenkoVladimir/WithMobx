import React, { useState } from 'react';

const DeleteAllButton = ( {state} ) => {

    const handlerDeleteAll = () => {
        state.deleteAll();
    }
    
    return (
        <div>
            <button onClick={handlerDeleteAll} >DeleteAll</button>
        </div>
    )
}

export default DeleteAllButton;