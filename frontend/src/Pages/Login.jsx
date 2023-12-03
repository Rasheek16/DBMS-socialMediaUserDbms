import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import FormInput from "../Components/FormInput";

const Login = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/users')
    }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email" name="identifier" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-secondary btn-block"
             onClick={handleClick}
          >Login
            {/* <Link to="/users">Login</Link>/ */}
          </button>
        </div>
      </Form>
    </section>
  );
};
export default Login;
