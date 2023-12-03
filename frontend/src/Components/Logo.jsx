import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-center w-52 rounded-lg border border-black h-96 ">
        <div className="w-52 rounded-lg ">
          <div className="flex items-center justify-center  transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px]">
            <img
              size="lg"
              src="database.png"
              name="'User Avatar'"
              className="w-auto mt-auto "
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Logo;
