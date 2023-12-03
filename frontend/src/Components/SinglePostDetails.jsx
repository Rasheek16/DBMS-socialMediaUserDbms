import React from "react";
import { Link } from "react-router-dom";

const SinglePostDetails = ({ likes, comments }) => {
  console.log("Likes:", likes);
  console.log("Comments:", comments.length);

  const renderUserDetails = (user) => {
    const { likedByUserId, likedByUsername } = user;
    return (
      <tr key={likedByUserId}>
        <td>{likedByUserId}</td>
        <td>{likedByUsername}</td>
        <td>
          <Link to={`/user/${likedByUserId}`}>
            <button className="btn btn-ghost btn-xs">More details</button>
          </Link>
        </td>
      </tr>
    );
  };

  const renderCommentDetails = (comment) => {
    const { commentId, content, postId, username, authorId, createdAt } =
      comment;
    return (
      <tr key={commentId}>
        <td>{commentId}</td>
        <td>{content}</td>
        <td>{postId}</td>
        <td>{username}</td>
        <td>{createdAt}</td>
        <td>
          <Link to={`/user/${authorId}`}>
            <button className="btn btn-ghost btn-xs">More details</button>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <section className="flex mt-20 align-element">
      <div className="overflow-x-auto ml-40 min-w-fit border border-black p-4 rounded">
        <h2 className="text text-3xl capitalize font-serif font-semibold">
          Likes
        </h2>
        <table className="table table-xs ">
          <thead>
            <tr>
              <th className="text-xl">Id</th>
              <th className="text-xl ">Name</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>{likes && likes.map(renderUserDetails)}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className="overflow-x-auto ml-20 min-w-fit border border-black file:p-4 rounded">
        <h2 className="text text-3xl capitalize font-serif font-semibold ml-2">
          Comments
        </h2>
        <table className="table table-xs ">
          <thead>
            <tr>
              <th className="text-xl ">Id</th>
              <th className="text-xl ">Content</th>
              <th className="text-xl ">Post ID</th>
              <th className="text-xl ">Author</th>
              <th className="text-xl ">Created At</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {comments.length > 0 ? (
              comments.map(renderCommentDetails)
            ) : (
              <h1 className="ml-2 mt-5 text text-xl font font-serif font-bold capitalize align-middle justify-center">
                No Comments yet
              </h1>
            )}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </section>
  );
};

export default SinglePostDetails;
