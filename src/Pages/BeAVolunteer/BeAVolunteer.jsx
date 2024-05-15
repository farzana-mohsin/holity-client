import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);

  const loader = useLoaderData();
  const [postDetails] = useState(loader);

  const {
    _id,
    numberOfVolunteers,
    postTitle,
    category,
    deadline,
    thumbnail,
    location,
    description,
    organizer,
  } = postDetails;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const applicationData = {
      postId: _id,
      email: user?.email,
      name: user?.displayName,
      suggestion,
      status,
    };

    fetch(`${import.meta.env.VITE_API_URL}/applications`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Request submitted successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }
      });
  };

  const form = (
    <form onSubmit={handleRequest}>
      <div>
        <label
          className='text-gray-700 '
          htmlFor='suggestion'
        ></label>
        <input
          placeholder='Suggestion'
          name='suggestion'
          type='text'
          className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 rounded-md focus:ring-2 focus:ring-offset-2 border-[#6faf9f] focus:ring-[#6faf9f]'
        />
      </div>

      <div className='flex flex-col gap-2 '>
        <label
          className='text-gray-700 '
          htmlFor='status'
        ></label>
        <select
          className='px-4 py-2 mt-2 text-gray-700 bg-white border-2 rounded-md focus:ring-2 focus:ring-offset-2 border-[#6faf9f] focus:ring-[#6faf9f]'
          name='status'
        >
          <option selected>Requested</option>
          <option value='complete'>Complete</option>
        </select>
      </div>
      {organizer?.email === user.email ? (
        ""
      ) : (
        // <Link to='/manage-my-posts'>
        <button
          type='submit'
          className='btn bg-[#6faf9f] hover:bg-[#727C82] text-white px-2 py-1 lg:px-4 lg:py-2 border-2 border-[#f77d5c] lg:text-sm rounded-xl lg:mr-3 w-full mt-6 mb-3 text-lg focus:ring-2 focus:ring-offset-2 focus:ring-orange-800'
        >
          Request to be a Volunteer
        </button>
        // </Link>
      )}
    </form>
  );

  return (
    <div className='my-7 container mx-auto'>
      <div className='my-7 container mx-auto'>
        <Helmet>
          <title>Holity | Be a Volunteer</title>
        </Helmet>

        <div className='w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto'>
          <img
            className='object-cover object-center w-full h-96'
            src={thumbnail}
            alt='No image found'
          />

          <div className='flex items-center px-6 py-3 bg-[#6faf9f]'>
            <h1 className='mx-3 text-lg font-semibold text-white flex items-center gap-2'>
              <span className='text-2xl'>
                <MdOutlineVolunteerActivism />
              </span>
              {postTitle}
            </h1>
          </div>

          <div className='px-6 py-4'>
            <p className='py-2 text-gray-700 dark:text-gray-400 mb-8 text-sm'>
              {description}
            </p>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 justify-between'>
              <h1 className='px-2 text-sm flex gap-2 items-center'>
                <span className='text-xl'>
                  <AiOutlineAreaChart />
                </span>
                {category}
              </h1>
              <h1 className='px-2 text-sm flex gap-2 items-center'>
                <span className='text-xl'>
                  <BsCalendarDate />
                </span>
                Deadline: {new Date(deadline).toLocaleDateString()}
              </h1>
            </div>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 justify-between'>
              <h1 className='px-2 text-sm flex gap-2 items-center'>
                <span className='text-xl'>
                  <IoLocationSharp />
                </span>
                {location}
              </h1>

              <h1 className='px-2 text-sm flex items-center gap-2'>
                <span className='text-xl'>
                  <TbRosetteDiscountCheckFilled />
                </span>
                {numberOfVolunteers} volunteers needed
              </h1>
            </div>

            <div className='flex items-center mt-4 text-gray-700 dark:text-gray-200 gap-10 justify-between'>
              <h1 className='px-2 text-sm '>
                Organizer Name: <br />
                {organizer?.name}
              </h1>

              <h1 className='px-2 text-sm text-right '>
                Organizer Email: <br /> {organizer?.email}
              </h1>
            </div>

            <div className=' my-10 text-gray-700 dark:text-gray-200 text-center mx-auto'>
              {numberOfVolunteers === 0 ? "" : form}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
