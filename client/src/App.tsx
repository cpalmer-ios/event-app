import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing";
import { Events } from "./views/Events";
import { SingleEvent } from "./views/SingleEvent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="events/:id" element={<SingleEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
