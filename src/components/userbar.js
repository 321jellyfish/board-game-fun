import { useContext } from "react";
import { UserContext } from "../context/user";
import { ThemeContext } from "../context/theme";

const UserBar = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light"
          ? "display-loggedin-user"
          : "dark-display-loggedin-user"
      }
    >
      <p>{user.username}</p>
      <img className="user-img-small" src={user.img_url} alt={user.username} />
    </div>
  );
};

export default UserBar;
