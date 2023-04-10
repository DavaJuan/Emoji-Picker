import React, { useRef } from 'react';
import EmojiPicker from './EmojiPicker';
import './EmojiPicker.css';

const EmojiPickerInput = () => {

  const refInput = useRef(null);


  return (
    <div>
      <h1 className='title'>Emoji Picker</h1>
      <div className='container'>
        <input 
          className='firstInput'
          ref={refInput} 
          type="text"
          placeholder='Write something...' 
        />
        <EmojiPicker ref={refInput}/>
      </div> 
    </div>
  );
}

export default EmojiPickerInput;