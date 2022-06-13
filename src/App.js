import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";

function App() {
  const [chosenCategory, setChosenCategory] = useState("no-category");
  return (
    <BrowserRouter>
      <Header />
      <Nav
        chosenCategory={chosenCategory}
        setChosenCategory={setChosenCategory}
      />
      <Routes>
        <Route
          path="/"
          element={<ReviewList chosenCategory={chosenCategory} />}
        ></Route>
        {/* <Route path="/:chosen-category" element={<ReviewList />}></Route> */}
        <Route
          path="/hidden-roles"
          element={<ReviewList chosenCategory={chosenCategory} />}
        ></Route>
        <Route
          path="/dexterity"
          element={<ReviewList chosenCategory={chosenCategory} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
