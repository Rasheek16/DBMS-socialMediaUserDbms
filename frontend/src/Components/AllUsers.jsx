import UserNavigation from "./UserNavigation";
import UsersTable from "./UsersTable";
// import UserList from "./Userlist";
import Logo from "./Logo";

const AllUsers = () => {
  return (
    <section className="flex mt-20 ml-32 align-element">
      <Logo />
      <UsersTable />
    </section>
  );
};

export default AllUsers;
