import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);

  const loader = useLoaderData();
  const [postDetails] = useState(loader);

  const {
    _id,
    postTitle,
    category,
    deadline,
    thumbnail,
    location,
    number,
    description,
    postCreator,
  } = postDetails;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    console.log(suggestion, status);

    const applicationData = {
      postId: _id,
      email: user?.email,
      name: user?.displayName,
      suggestion,
      status,
    };

    fetch(`${import.meta.env.VITE_API_URL}/applications`, {
      method: "POST",
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

  return (
    <div className='my-7 container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-center px-4 mb-14 lg:space-x-16 gap-8 lg:gap-20  md:px-10 lg:px-32'>
        <div>
          <h1 className='md:text-5xl font-bold leading-none text-3xl max-w-3xl '>
            {postTitle}
          </h1>
          <p className='my-8 text-lg sm:mb-12 xl:max-w-3xl '>{category}</p>
          <ul>
            <li>Rating: {new Date(deadline).toLocaleDateString()}</li>
            <li>Number of Volunteers Needed: {number}</li>
            <li>Location: {location}</li>
            <p>Organizer's name: {postCreator?.name}</p>
            <p>Organizer's email: {postCreator?.email}</p>
            <p>Volunteer name: {user?.displayName}</p>
            <p>Volunteer email: {user?.email}</p>
          </ul>
          <p className='my-10'>{description}</p>
        </div>
        <div className=' shadow-2xl'>
          <img
            src={thumbnail}
            alt=''
            className='w-full h-[700px] shadow-2xl'
          />
        </div>

        <form onSubmit={handleRequest}>
          <div>
            <label
              className='text-gray-700 '
              htmlFor='suggestion'
            >
              Suggestion
            </label>
            <input
              placeholder='Suggestion'
              name='suggestion'
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex flex-col gap-2 '>
            <label
              className='text-gray-700 '
              htmlFor='status'
            >
              Status
            </label>
            <select
              className='select select-bordered'
              name='status'
            >
              <option selected>Requested</option>
            </select>
          </div>
          {postCreator?.email === user.email ? (
            ""
          ) : (
            <button type='submit'>Request</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
