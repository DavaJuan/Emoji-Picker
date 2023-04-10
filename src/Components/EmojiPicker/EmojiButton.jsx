import React from 'react';
import './EmojiPicker.css';

const EmojiButton = ({ emoji,onClick }) => {

  const handleClick = () =>{
    onClick(emoji);
  }

  return (
   <button className='emojiButton' onClick={handleClick}>{emoji.symbol}</button>
  );
}

export default EmojiButton;