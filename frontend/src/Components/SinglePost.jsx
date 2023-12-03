import React from "react";
import { Link, useParams } from "react-router-dom";
import SinglePostDetails from "./SinglePostDetails";
import SectionTitle from "./SectionTitle";

const SinglePost = ({ data }) => {
  const {id}=useParams()
  const { commentData, likeData } = data;

  // Check if commentData and likeData exist before rendering
  if (!commentData || !likeData) {
    return null; // or some fallback content if you prefer
  }

  return (
    <>
      <SectionTitle text={`Post Id : ${id}`} />
      <SinglePostDetails likes={likeData} comments={commentData} />
    </>
  );
};

export default SinglePost;
