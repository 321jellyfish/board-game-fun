import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Nav
        categories={categories}
        setCategories={setCategories}
        category={category}
        setCategory={setCategory}
      />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        {categories.map((category) => {
          console.log(category.slug);
          return (
            <Route
              path={`/${category.slug}`}
              element={
                <ReviewList category={category} setCategory={setCategory} />
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
