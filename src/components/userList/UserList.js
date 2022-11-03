import User from "../user/User";
import { useSelector } from "react-redux";

function UserList() {
  const userList = useSelector((state) => state.users);

  return (
    <aside className="aside" id="members-container">
      {userList.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </aside>
  );
}

export default UserList;
