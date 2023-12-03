import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GroupsTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/groups`);
      const combinedData = response.data.groups.map((group, index) => ({
        ...group,
        memberCount: response.data.memberCount[index],
      }));

      setData(combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  return (
    <div className="overflow-x-auto ml-20">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-xl">Id</th>
            <th className="text-xl">Group Name</th>
            <th className="text-xl">Member Count</th>

            <th className="text-xl">Created At</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((group) => {
            const { groupId, groupName, createdAt } = group;
            const memberCount = group.memberCount.numberOfMembers;

            return (
              <tr key={groupId}>
                <th>{groupId}</th>
                <td>{groupName}</td>
                <td>{memberCount}</td>
                <td>{createdAt}</td>

                <th>
                  <Link to={`/group/${groupId}`}>
                    <button className="btn btn-ghost btn-xs">
                      More details
                    </button>
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
      <div>
        <div className="join mt-5">
          <button className="join-item btn" disabled>
            «
          </button>
          <button className="join-item btn">Page: 1</button>
          <button className="join-item btn" disabled>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupsTable;
