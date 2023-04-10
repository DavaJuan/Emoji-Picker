import { forwardRef, useEffect, useRef, useState } from "react";
import {data as EmojiList} from './Data.js';
import EmojiSearch from "./EmojiSearch.jsx";
import EmojiButton from "./EmojiButton.jsx";
import './EmojiPicker.css';

export function EmojiPicker(props,refInput){

  const [isOpen,setIsOpen] = useState(false);
  const [emojis,setEmojis] = useState([...EmojiList]);

  const containerRef = useRef(null);

  useEffect(()=>{
    window.addEventListener('click', (e)=> {
      if(!containerRef.current.contains(e.target)){
        setIsOpen(false);
        setEmojis(EmojiList);
      }
    })
  },[]);


  const handleClickOpen = () =>{
    setIsOpen(!isOpen);
  }

  const handleSearchEmoji = (e) =>{
    const q = e.target.value.toLowerCase();

    if(!!q){
      const search = EmojiList.filter((emoji) =>{
        return (
          emoji.name.toLowerCase().includes(q) || 
          emoji.keywords.toLowerCase().includes(q));
      });

      setEmojis(search);
    }else{
      setEmojis(EmojiList);
    }
  }

  const handleOnClickEmoji = (emoji) =>{
    const cursorPos = refInput.current.selectionStart;
    const text = refInput.current.value;
    const prev = text.slice(0,cursorPos);
    const next = text.slice(cursorPos);

    refInput.current.value = prev + emoji.symbol + next;
    refInput.current.selectionStart = cursorPos + emoji.symbol.length;
    refInput.current.selectionEnd = cursorPos + emoji.symbol.length;
    refInput.current.focus();
  }


  return(
    <div ref={containerRef} className="inputContainer">
      <button onClick={handleClickOpen} className="emojiPickerButton">🔎</button>

      {isOpen ? (
        <div className="emojiPickerContainer">
          <EmojiSearch onSearch={handleSearchEmoji}/>
        <div className="emojiList">
          {emojis.map((emoji) => (
            <EmojiButton 
              key={emoji.symbol}
              emoji={emoji}
              onClick={handleOnClickEmoji}
            />
          ))}
        </div>
      </div> ) : ( 
        '' 
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);