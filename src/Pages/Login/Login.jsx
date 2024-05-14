import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [setLoginError] = useState("");
  const [setLoginSuccess] = useState("");
  const { login, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const from = "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError("");
    setLoginSuccess("");

    login(email, password)
      .then(() => {
        toast.success("You have logged in successfully!");
        setTimeout(function () {
          navigate(from);
        }, 2000);
      })
      .catch(() => {
        toast.error("Credentials don't match, please try again");
      });

    // Google onClick button
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("You have logged in successfully!");
        setTimeout(function () {
          navigate(from);
        }, 2000);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        toast.success("You have logged in successfully!");
        setTimeout(function () {
          navigate(from);
        }, 2000);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='mb-10 lg:mb-2'>
      <Helmet>
        <title>Holity | Login</title>
      </Helmet>
      <div className='lg:h-[calc(100vh-290px)] w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-[#267d6c] bg-opacity-80 text-white mx-auto my-3'>
        <h2 className='mb-3 text-3xl font-semibold text-center'>
          Login to your account
        </h2>
        <p className='text-sm text-center text-[#ff9d41] mb-5'>
          Dont have an account? Sign up{" "}
          <Link
            to='/register'
            className='focus:underline hover:underline font-bold text-white'
          >
            here
          </Link>
        </p>
        <div className='my-6 space-y-4'>
          <button
            onClick={() => handleGoogleSignIn()}
            aria-label='Login with Google'
            type='button'
            className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-2 border-orange-200 focus:ring-orange-800'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
            </svg>
            <p className='text-white'>Login with Google</p>
          </button>
          <button
            onClick={() => handleGithubSignIn()}
            aria-label='Login with GitHub'
            role='button'
            className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-4 focus:ring-offset-4 border-orange-200 focus:ring-orange-800'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
            </svg>
            <p>Login with GitHub</p>
          </button>
        </div>
        <div className='flex items-center w-full my-2'>
          <hr className='w-full text-gray-100' />
          <p className='px-3 text-gray-100 py-0'>OR</p>
          <hr className='w-full text-gray-100' />
        </div>
        <form
          onSubmit={handleLogIn}
          className='card-body py-0'
        >
          <div className='form-control '>
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
          <div className='form-control pt-0 mt-0 '>
            <label className='label'>
              <span className='label-text text-white'>Password</span>
            </label>
            <input
              name='password'
              type='password'
              placeholder='password'
              className='w-full px-3 py-2 border-2 rounded-md border-orange-400 bg-gray-100 text-gray-900 focus:border-amber-800'
              required
            />
            <label className='label'></label>
          </div>
          <div className='form-control'>
            <button className='w-full px-8 py-3 font-semibold bg-opacity-80 border-white btn bg-[#ff9954] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl hover:bg-[#727C82]'>
              Login
            </button>
          </div>
        </form>
        {/* {loginError && (
          <p className='text-red-600 text-lg pb-3 ml-7 mt-0 mb-6'>
            {loginError}
          </p>
        )}
        {loginSuccess && (
          <p className='text-green-600 text-xl pb-3 ml-8 mt-0 mb-6'>
            {loginSuccess}
          </p>
        )} */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
