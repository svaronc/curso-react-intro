import React, { useState } from 'react';
import './TodoSearch.css'


export function TodoSearch() {
  
  const [searchValue, setSeacrhValue] = useState('');
  
  return (
    <input placeholder="cortar cebolla" className="TodoSearch" onChange={(event) => {
       console.log(event.target.value); 
    }}></input>
  );
}

