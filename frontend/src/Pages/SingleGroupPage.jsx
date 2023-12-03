import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser } from "../Components";
import SingleGroup from "../Components/SingleGroup";

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/group/${id}`
    );
    console.log(response.data.data);
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const SingleGroupPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchData(id);
        const responseData = response;
        setUserData(responseData.data.data);
        console.log(responseData.data.data);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };
    fetchUserData();
  }, [id]);
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <>
      <SectionTitle text={`Group  ID : ${userData[0]?.groupId}`} />
      <SingleGroup userData={userData} />
    </>
  );
};

export default SingleGroupPage;
