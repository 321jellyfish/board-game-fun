import { useContext } from "react";
import { UserContext } from "../context/user";

const UserBar = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="display-loggedin-user">
      <p>{user.username}</p>
      <img className="user-img-header" src={user.img_url} alt={user.username} />
    </section>
  );
};

export default UserBar;
