import React, { useState } from 'react';
import './EmojiPicker.css';

const EmojiSearch = ({onSearch}) => {

  const [value,setValue] = useState('');

  const handleChange = (e) =>{
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input 
      className='search'
      type='text' 
      onChange={handleChange} 
      value={value}
      placeholder='Search your emojis'
    />
  );
}

export default EmojiSearch;