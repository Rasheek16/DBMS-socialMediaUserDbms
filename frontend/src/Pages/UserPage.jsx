import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser } from "../Components";

const fetchData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const UserPage = () => {
  const { id } = useParams(); // Access the "id" parameter from the URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData(id);
        setUserData(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    fetchUserData();
  }, [id]); // Include "id" in the dependency array to re-run the effect when the "id" changes

  return (
    <>
      <SectionTitle text={`User id : ${id}`} />
      {userData && <SingleUser data={userData} />}
    </>
  );
};

export default UserPage;
