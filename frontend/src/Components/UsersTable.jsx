import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;
  const totalItemsCount = 20; // Update with the total number of items on your server

  const fetchData = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users?page=${page}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChangeNext = async () => {
    if (activePage === 2) {
      setActivePage(1);
    } else {
      setActivePage(2);
    }
    await fetchData(activePage);
  };
  const handlePageChangePrev = async () => {
    if (activePage === 1) {
      setActivePage(2);
    } else {
      setActivePage(1);
    }
    await fetchData(activePage);
  };
  useEffect(() => {
    fetchData(activePage);
  }, [activePage]);

  return (
    <div className="overflow-x-auto ml-20">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="text-xl">Id</th>
            <th className="text-xl">Name</th>
            <th className="text-xl">Location</th>
            {/* <th className="text-xl">Friends</th> */}
            <th className="text-xl">Status</th>
            <th className="text-xl">Last Login</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            const { userId, firstName, location, Friends, status, createdAt } =
              user;
            return (
              <tr key={userId}>
                <th>{userId}</th>
                <td>{firstName}</td>
                <td>{location}</td>
                <td>{status}</td>
                {/* <td>{Groups}</td> */}
                <td>{createdAt}</td>
                <th>
                  <Link to={`/user/${userId}`}>
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
          <button className="join-item btn" onClick={handlePageChangePrev}>
            «
          </button>
          <button className="join-item btn">Page: {activePage}</button>
          <button className="join-item btn" onClick={handlePageChangeNext}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
