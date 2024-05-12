import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCrown } from "react-icons/fa";

// import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [setTheme] = useState("emerald");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("retro");
    } else setTheme("emerald");
  };

  const navLinks = (
    <>
      <li className='text-white'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='text-white '>
        <NavLink to='/need-volunteers'>Volunteers Needed</NavLink>
      </li>
      {/* <li className='text-white'>
        <NavLink to='/all-items'>All Arts & Crafts</NavLink>
      </li> */}
      {user && (
        <>
          <div className=''>
            <ul className='menu menu-horizontal '>
              <li className=''>
                <details className='menu menu-horizontal z-[3] w-full'>
                  <summary className=' text-white rounded-xl'>
                    My Profile
                  </summary>
                  <ul className=' bg-black text-white'>
                    <li className=''>
                      <NavLink to='/add-post'>Add Volunteer Post</NavLink>
                    </li>
                    <li className=''>
                      <NavLink to='/manage-posts'>Manage My Posts</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          {/* <li className='text-white'>
            <NavLink to='/add-item'>Add Craft</NavLink>
          </li>
          <li className='text-white'>
            <NavLink to='/my-items'>My Arts & Crafts</NavLink>
          </li> */}
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className='navbar lg:px-10  bg-black mx-auto '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-black rounded-box w-52 text-black'
            >
              {navLinks}
            </ul>
          </div>
          <h1 className='animate__animated animate__fadeInLeft text-xl md:text-3xl font-bold text-white pl-1'>
            Crown
          </h1>
          <div className='flex items-center justify-center text-4xl font-bold  text-orange-700 ml-2'>
            <FaCrown />
          </div>
          <h1 className='animate__animated animate__fadeInLeft text-xl md:text-3xl font-bold text-white pl-1'>
            Art
          </h1>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='flex flex-row px-1 space-x-5 justify-center items-center'>
            {navLinks}
          </ul>
        </div>
        <div className=' flex flex-col md:flex-row '>
          {user ? (
            <div className='flex md:flex-row items-center gap-2'>
              <div
                className='tooltip tooltip-bottom border-none bg-none rounded-full mr-3 ml-0'
                data-tip={user?.displayName || "user not found"}
              >
                <button className='rounded-full bg-none border-none w-12'>
                  <img
                    className=' md:block rounded-full bg-none border-none'
                    alt='image not found'
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/YDgsXWt/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
                    }
                  />
                </button>
              </div>

              <button
                className='btn bg-orange-800 hover:bg-yellow-400 text-white md:px-4 md:py-2 border text-sm rounded-xl mr-3'
                onClick={() => handleSignOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className='flex flex-row'>
              <Link to='/login'>
                <button className='btn  bg-orange-800 text-white md:px-4 md:py-2 border text-sm rounded-xl md:ml-2 hover:bg-yellow-400'>
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className='btn  bg-orange-800 text-white md:px-4 md:py-2 border text-sm rounded-xl ml-2  hover:bg-yellow-400'>
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}

        {/* <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <details>
                <summary className='py-[13px] bg-orange-800 text-white  border text-sm rounded-xl ml-1 hover:bg-yellow-400 '>
                  My Profile
                </summary>
                <ul className='p-2 bg-base-100 rounded-t-none'>
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div> */}

        <label className='cursor-pointer grid place-items-center ml-6'>
          <input
            onChange={handleToggle}
            type='checkbox'
            value='retro'
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='5'
            />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
