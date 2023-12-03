import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser, UserPost } from "../Components";
import SingleGroup from "../Components/SingleGroup";

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/posts/${id}`
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const Posts = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);

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
    console.log(postData);
  }, [postData]);
  return (
    <>
      {postData?.length > 0 ? (
        <>
          <SectionTitle text={`User Id : ${id}`} />
          <UserPost data={postData} id={id} />
        </>
      ) : (
        // <h1>h</h1>
        <>
          <SectionTitle text={`User Id : ${id}`} />
          <h1 className=" mt-56 text text-3xl font font-serif font-bold capitalize align-middle justify-center">
            this user has not posted anything
          </h1>
        </>
      )}
    </>
  );
};

export default Posts;
