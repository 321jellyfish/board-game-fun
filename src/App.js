import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Nav categories={categories} setCategories={setCategories} />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        {categories.map((category) => {
          console.log(category.slug);
          return (
            <Route path={`/${category.slug}`} element={<ReviewList />}></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
