import React from "react";
import { Link } from "react-router-dom";

const CommentsTable = ({ comments }) => {
  console.log("Comments:", comments);

  if (!comments || comments.length === 0) {
    return (
      <section className="flex mt-20 align-element">
        <div className="overflow-x-auto ml-20 min-w-fit p-4">
          <h1 className=" mt-20 text text-3xl font font-serif font-bold capitalize align-middle justify-center">
            this person has not commented on any posts
          </h1>
        </div>
      </section>
    );
  }

  const renderCommentDetails = (comment) => {
    const {
      commentId,
      content,
      postId,
      replyTo,
      authorId,
      commentCreatedAt,
      postTitle,
      postContent,
      postCreatedDate,
      postAuthor,
      postFormId,
    } = comment;

    return (
      <tr key={commentId}>
        <td>{commentId}</td>
        <td>{content}</td>
        <td>{postId}</td>
        {/* <td>{replyTo ? replyTo : "N/A"}</td> */}
        <td>{authorId}</td>
        {/* <td>{commentCreatedAt}</td> */}
        <td>{postTitle}</td>
        <td>{postContent}</td>
        {/* <td>{postCreatedDate}</td> */}
        <td>{postAuthor}</td>
        {/* <td>{postFormId}</td> */}
        <td>
          <Link to={`/user/${authorId}`}>
            <button className="btn btn-ghost btn-xs">Author Details</button>
          </Link>
        </td>
        <td>
          <Link to={`/post/${postId}`}>
            <button className="btn btn-ghost btn-xs">Post Details</button>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <section className="flex mt-20 align-element">
      <div className="overflow-x-auto min-w-fit border border-black p-4 rounded w-full">
        <h2 className="text text-3xl capitalize font-serif font-semibold">
          Comments
        </h2>
        <table className="table table-xs ">
          <thead>
            <tr>
              <th className="text-xl ">Comment ID</th>
              <th className="text-xl ">Content</th>
              <th className="text-xl ">Post ID</th>
              {/* <th className="text-xl border">Reply To</th> */}
              <th className="text-xl ">Author ID</th>
              {/* <th className="text-xl border">Comment Created At</th> */}
              <th className="text-xl ">Post Title</th>
              <th className="text-xl ">Post Content</th>
              {/* <th className="text-xl border">Post Created Date</th> */}
              <th className="text-xl ">Post Author</th>
              {/* <th className="text-xl border">Post Form ID</th> */}
              <th className=""></th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>{comments && comments.map(renderCommentDetails)}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </section>
  );
};

export default CommentsTable;
