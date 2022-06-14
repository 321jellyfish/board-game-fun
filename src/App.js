import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        <Route path="/:pathcategory" element={<ReviewList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
