import SinglePost from "../Components/SinglePost";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const fetchData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/post/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
};

const PostDetails = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({}); // Use an empty object as initial state

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await fetchData(id);
        setPostData(data);
      } catch (error) {
        console.error("Error loading post data:", error);
      }
    };

    fetchPostData();
  }, [id]);

  // Check if postData exists before rendering SinglePost
  return postData ? <SinglePost data={postData} /> : null;
};

export default PostDetails;
