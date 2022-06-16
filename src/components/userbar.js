import { useContext } from "react";
import { UserContext } from "../context/user";

const UserBar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="display-loggedin-user">
      <p>{user.username}</p>
      <img className="user-img-small" src={user.img_url} alt={user.username} />
    </div>
  );
};

export default UserBar;
