import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FaBeer } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const from = "/";

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    console.log(name, email, image, password);

    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      toast.error("Password should have at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password should contain at least one lowercase character");
    }

    // create user
    createUser(email, password, name, image)
      .then(() => {
        // result not needed as per conceptual session
        updateUserProfile(name, image).then(() => {});
        // console.log(result.user);
        toast.success("you have registered successfully!");
        setTimeout(function () {
          navigate(from);
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className='mb-10 lg:mb-2'>
      <Helmet>
        <title>Holity | Register</title>
      </Helmet>

      <div className='lg:h-[calc(100vh-290px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-[#267d6c]  bg-opacity-80 text-white mx-auto my-3 border-2 border-yellow-700'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Register here!
        </h2>
        <p className='text-sm text-center text-[#ff9d41] mb-5'>
          Already have an account? Please login{" "}
          <Link
            to='/login'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
        </p>

        <div className='flex items-center w-full'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 my-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>
        <form
          onSubmit={handleRegister}
          className='card-body py-0'
        >
          <div className='form-control py-0'>
            <label className='label'>
              <span className='label-text text-white'>Name</span>
            </label>
            <input
              name='name'
              type='text'
              placeholder='name'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Email</span>
            </label>
            <input
              name='email'
              type='email'
              placeholder='email'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text text-white'>Photo</span>
            </label>
            <input
              name='image'
              type='text'
              placeholder='photo URL'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
          </div>
          <div className='form-control relative'>
            <label className='label'>
              <span className='label-text text-white'>Password</span>
            </label>
            <input
              name='password'
              type={showPassword ? "text" : "password"}
              placeholder='password'
              className='w-full px-3 py-2 border-2 rounded-md  border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            <span
              className='absolute top-12 right-3 text-black text-lg'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <MdRemoveRedEye />}
            </span>
          </div>
          <div className='form-control py-3'>
            <button className='w-full px-8 py-3 font-semibold bg-opacity-80 border-white btn  bg-[#ff9954] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl  hover:bg-[#727C82]'>
              Register
            </button>
          </div>
        </form>
        {/* {registerError && (
          <p className='text-red-600 pb-3 ml-7 mt-0 mb-6'>{registerError}</p>
        )}

        {registerSuccess && (
          <p className='text-green-600 text-xl pb-3 ml-7 mt-0 mb-6'>
            {registerSuccess}
          </p>
        )} */}
        {/* <h3>
          {" "}
          Lets go for a <FaBeer />?{" "}
        </h3> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
