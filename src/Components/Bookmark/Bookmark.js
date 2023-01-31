import React, { useEffect, useState } from "react";
import axios from "axios";
import './Bookmark.css'

// https://quotable.io/quotes/J1amO36TwbX8
function Bookmark() {
  
  const [value,setValue]=useState([])
  useEffect(() => {
    onClick();
  },[]);
    var arr = [];
  const onHandle = async (e) => {
    let ss = localStorage.key(e);
    const url = `https://quotable.io/quotes/${ss}`;
    // console.log(url);
    const response = await axios.get(url);
    // console.log(response);
    return response;
  };
  const onClick = async () => {
    
    var length = localStorage.length;
    for (let i = 0; i < length; i++) {
      const res = await onHandle(i);
      // console.log(res.data.content)
      arr.push(res.data);
    }
   
    setValue(arr);
    console.log(value)
    
  };
 

  return (
    <>
    {value.map((item)=>
  <div id="quote-box">
        <div id="wrapper">
          <div id="text">
            <p>{item.content}</p>
          </div>
          <div id="author">{item.author}</div>
        </div>
       
      </div>)
    }  
    </>
  );
}

export default Bookmark;
