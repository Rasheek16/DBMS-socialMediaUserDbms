import React from "react";
import { Link } from "react-router-dom";

const GroupTable = ({ groups }) => {
  console.log("Groups:", groups);

  const renderGroupDetails = (group) => {
    const {
      membershipId,
      groupId,
      groupName,
      //   moderator,
      formId,
      groupCreatedAt,
      joinDate,
      numberOfMembers,
    } = group;

    return (
      <tr key={membershipId}>
        <td>{membershipId}</td>
        <td>{groupId}</td>
        <td>{groupName}</td>
        {/* <td>{moderator === 1 ? "Yes" : "No"}</td> */}
        <td>{formId}</td>
        <td>{groupCreatedAt}</td>
        <td>{joinDate}</td>
        <td>{numberOfMembers}</td>
        <td>
          <Link to={`/group/${groupId}`}>
            <button className="btn btn-ghost btn-xs">More details</button>
          </Link>
        </td>
      </tr>
    );
  };
  if (groups === null) {
    // Handle loading state
    return <p>Loading...</p>;
  }

  if (groups.length === 0) {
    return (
      <section className="flex mt-20 align-element">
        <div className="overflow-x-auto ml-20 min-w-fit p-4">
          <h1 className=" mt-56 text text-3xl font font-serif font-bold capitalize align-middle justify-center">
            this person has not joined any groups
          </h1>
        </div>
      </section>
    );
  }
  return (
    <section className="flex mt-20 align-element">
      <div className="overflow-x-auto ml-0 min-w-fit border border-black p-4 rounded ">
        <h2 className="text text-3xl capitalize font-serif font-semibold">
          Groups Joined
        </h2>
        <table className="table table-xs  ">
          <thead>
            <tr>
              <th className="text-xl gap-2 ">Membership ID</th>
              <th className="text-xl gap-2">Group ID</th>
              <th className="text-xl gap-2">Group Name</th>
              {/* <th className="text-xl ">Moderator</th> */}
              <th className="text-xl gap-2">Form ID</th>
              <th className="text-xl gap-2">Group Created At</th>
              <th className="text-xl gap-2">Join Date</th>
              <th className="text-xl gap-2">Number of Members</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>{groups && groups.map(renderGroupDetails)}</tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </section>
  );
};

export default GroupTable;
