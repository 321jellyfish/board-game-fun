import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";
import Review from "./components/review";
import { UserContext } from "./context/user";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("jessjelly");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewList />}></Route>
          <Route path="/:pathcategory" element={<ReviewList />}></Route>
          <Route path="/:pathcategory/:reviewid" element={<Review />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
