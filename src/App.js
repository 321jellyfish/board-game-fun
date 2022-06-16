import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReviewList from "./components/reviewlist";
import Nav from "./components/nav";
import Review from "./components/review";
import UserBar from "./components/userbar";
import ErrorPage from "./components/errorpage";
import ChangeTheme from "./components/changetheme";
import { UserContext } from "./context/user";
import { useState } from "react";
import { ThemeContext } from "./context/theme";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({
    username: "jessjelly",
    img_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <body className={theme}>
            <div className="top-bar">
              <ChangeTheme />
              <UserBar />
            </div>
            <Header />
            <Nav />
            <Routes>
              <Route path="/" element={<ReviewList />}></Route>
              <Route path="/:pathcategory" element={<ReviewList />}></Route>
              <Route
                path="/:pathcategory/:reviewid"
                element={<Review />}
              ></Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </body>
        </BrowserRouter>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
