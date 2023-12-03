import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser, UserPost } from "../Components";
import SingleGroup from "../Components/SingleGroup";
import GroupTable from "./GroupTable";

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/user/group/${id}`
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const GroupDetails = () => {
  const { id } = useParams();
  const [groupData, setPostData] = useState([]);

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
    console.log(groupData);
  }, [groupData]);

  return (
    <>
      <SectionTitle text={`User id : ${id}`} />
      <GroupTable groups={groupData} />
    </>
  );
};

export default GroupDetails;
