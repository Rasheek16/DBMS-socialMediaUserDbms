import { Link } from "react-router-dom";

const UserFriends = ({ userId, username }) => {
  return (
    <Link to={`/user/${userId}`}>
      <tr className="hover">
        <th>{userId}</th>
        <td>{username}</td>
      </tr>
    </Link>
  );
};
export default UserFriends;
