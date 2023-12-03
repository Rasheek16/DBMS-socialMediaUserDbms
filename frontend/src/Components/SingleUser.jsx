import React from "react";
import Logo from "./Logo";
import { Scrollbar } from "react-scrollbars-custom";
import UserFriends from "./UserFriends";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import avatar from "./images/sampleavatar.jpg";
import { Link } from "react-router-dom";
// import img1 from "./images/img1.jpg";
// const images = [img1, img2, img3, img4, img5];
const SingleUser = ({ data }) => {
  const user = data.data.user[0];
  const friends = data.data.friends;
  const {
    createdAt,
    dateOfBirth,
    username,
    lastName,
    email,
    firstName,
    location,
    userId,
  } = user;

  return (
    <section className="flex mt-20 ml-32 align-element">
      {/* Logo */}

      {/* Avatar */}
      <div className="avatar w-24 h-24">
        <div className="w-96 rounded-full overflow-hidden">
          <img src={avatar} alt="User Avatar" className="h-full w-full" />
        </div>
      </div>

      {/* ID and Name */}
      <div className="overflow-x-auto ml-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>USER DETAILS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Id :</th>
              <td>{userId}</td>
            </tr>
            <tr>
              <th>Username : </th>
              <td>{username}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>First Name : </th>
              <td>{firstName}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Last Name : </th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Email :</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Date Of Birth</th>
              <td>{dateOfBirth}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{location}</td>
            </tr>
          </tbody>
        </table>

        <div className="ml-10 mt-10">
          <span>
            <button className="btn btn-outline btn-accent mx-auto">
              <Link to={`/user/${userId}/posts`}>Post Details</Link>
            </button>
          </span>
          <span className="ml-5">
            <button class="btn btn-outline btn-accent mx-auto">
              <Link to={`/user/${userId}/groups`}>Group Details</Link>
            </button>
          </span>
          <span className="ml-5">
            <button class="btn btn-outline btn-accent mx-auto">
              <Link to={`/user/${userId}/comments`}>Comments Details</Link>
            </button>
          </span>
        </div>
      </div>
      <div className="ml-20">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Photos"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-10"
          >
            <div className="w-64 h-80 carousel carousel-vertical rounded-box">
              <div className="carousel-item w-full">
                <img
                  src={img7}
                  className="w-full mt-2"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img1}
                  className="w-full mt-4"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img2}
                  className="w-full mt-4 "
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img3}
                  className="w-full mt-4"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img4}
                  className="w-full mt-4"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img5}
                  className="w-full mt-4"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src={img6}
                  className="w-full mt-4"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="FRIENDS"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-10"
          >
            <div className="overflow-x-auto w-64 h-80">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  {friends[0].map((friend) => {
                    const { userId, username } = friend;
                    return <UserFriends userId={userId} username={username} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleUser;
