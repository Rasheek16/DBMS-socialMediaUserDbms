import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser, UserPost } from ".";
import SingleGroup from "./SingleGroup";
import GroupTable from "./GroupTable";
import CommentsTable from "./CommentsTable";

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/user/comments/${id}`
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const Comments = () => {
  const { id } = useParams();
  const [commentData, setPostData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchData(id);
        const responseData = response;
        setPostData(responseData.data.data);
        console.log(responseData.data.data);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };
    fetchUserData();
  }, [id]);
  useEffect(() => {
    console.log(commentData);
  }, [commentData]);

  return (
    <>
      <SectionTitle text={`User id : ${id}`} />
      <CommentsTable comments={commentData} />
    </>
  );
};

export default Comments;
