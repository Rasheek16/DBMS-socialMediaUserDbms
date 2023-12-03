import { Link } from 'react-router-dom';

const SinglePostRow = ({
  postId,
  title,
  content,
  createdDate,
  author,
  formId,
  userId
}) => {
  return (
    <tr>
      <td>
        <h1 className="text font-bold">{postId}</h1>
      </td>
      <td>
        <div className="flex items-center gap-3">
         
          <div>
            <div className="font font-semibold font-serif">{title}</div>
            <div className="text-sm opacity-50">{createdDate}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold font-serif">{content}</div>
        <br />
      </td>
      <td>
        <div className="font font-serif">{author}</div>
      </td>
      <td>
        <div className="font font-serif">{formId}</div>
      </td>
      <th>
        <Link to={`/post/${postId}`}>
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};
export default SinglePostRow;
