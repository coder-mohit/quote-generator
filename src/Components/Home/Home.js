import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import "./Home.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [active, setActive] = useState(false);
  const [ID, getId] = useState([]);

  useEffect(() => {
    fetch("https://quotable.io/tags")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    onclick();
  }, []);
  const handleChange = (e) => {
    console.log(tag);

    setTag(e.target.value);
  };
  const getData = async () => {
    const url = `https://api.quotable.io/random?tags=${tag}`;
    console.log(url);
    const response = await axios.get(url);
    // console.log(response);
    return response;
  };
  const onclick = async () => {
    setActive(!active);

    const res = await getData();
    console.log(res);
    setValue(res.data.content);
    setAuthor(res.data.author);
    getId(res.data._id);
  };
  const onBookmark = () => {
    setActive(!active);
    if (active) {
      localStorage.setItem(ID, ID);
    }
  };

  return (
    <>
      <div id="quote-box">
        <div id="wrapper">
          <div id="text">
            <p>{value}</p>
          </div>
          <div id="author">- {author}</div>
        </div>
        <button id="new_quote" onClick={onclick}>
          New Quote
        </button>
        <button
          id="new_quote"
          onClick={onBookmark}
          style={{ backgroundColor: active ? "black" : "red" }}
        >
          Bookmark
        </button>

        <div className="dropdown">
          <select onClick={handleChange} className="selectColor">
            <option className="list_item"></option>
            {data.map((item) => (
              <option className="list_item" key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Home;
