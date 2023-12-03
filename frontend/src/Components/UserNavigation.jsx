const UserNavigation = ({ text }) => {
  return (
    <div className="ml-8 mt-2 text-xl">
      <ul className="list-disc">
        <li>
          <button className="text-white no-underline mr-4">{text}</button>
        </li>
      </ul>
    </div>
  );
};
export default UserNavigation;
