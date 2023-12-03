import { Link } from "react-router-dom";
import avatar from "./images/sampleavatar.jpg";

const SingleGroupUser = ({
  userId,
  username,
  location,

  university,
  email,

  joinDate,
  status,
}) => {
  return (
    <tr>
      <td>
        <h1 className="text font-bold">{userId}</h1>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={avatar} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font font-semibold font-serif">{username}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold font-serif">{email}</div>
        <br />
      </td>
      <td>
        <div className="font font-serif">{university}</div>
      </td>
      <td>
        <div className="font font-serif">{joinDate}</div>
      </td>
      <td>
        <div className="font font-serif">{status}</div>
      </td>
      <th>
        <Link to={`/user/${userId}`}>
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};
export default SingleGroupUser;
