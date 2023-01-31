import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home/Home.js'
import Header from "./Components/Header/Header.js";
import Bookmark from './Components/Bookmark/Bookmark.js'
function App() {
  return (
   <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>

      <Route path="/bookmark" element={<Bookmark />}/>

    </Routes>
   </Router>

  );
}

export default App;
