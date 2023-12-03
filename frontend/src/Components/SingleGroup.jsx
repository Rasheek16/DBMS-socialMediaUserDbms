import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SectionTitle, SingleUser } from "../Components";
import avatar from "./images/groupIcon.png";
import SingleGroupUser from "./SingleGroupUser";

const SingleGroup = ({ userData }) => {
  // console.log(userData);
  return (
    <section className="flex mt-20 align-element">
      <div className="avatar w-24 h-24">
        <div className="w-96 rounded-full overflow-hidden">
          <img src={avatar} alt="User Avatar" className="h-full w-full" />
          <div className="mt-0">
            <h1>hello</h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ml-5 ">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>University</th>
              <th>Join Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              const {
                userId,
                username,
                location,

                email,
                university,
                joinDate,
                status,
                dateOfBirth,
              } = user;
              return (
                <SingleGroupUser  key={userId}
                  userId={userId}
                  username={username}
                  location={location}
                  university={university}
                  joinDate={joinDate}
                  status={status}
                  email={email}
                  dateOfBirth={dateOfBirth}
                />
              );
            })}
          </tbody>

          <tfoot></tfoot>
        </table>
        <div></div>
      </div>
    </section>
  );
};

export default SingleGroup;
