import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PostDetails = () => {
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
    numberOfVolunteers,
    description,
    organizer,
  } = postDetails;

  return (
    <div className='my-7 container mx-auto'>
      <Helmet>
        <title>Holity Social Support | Post Details</title>
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
                <IoLocationSharp />{" "}
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
            {organizer?.email === user.email || numberOfVolunteers === 0 ? (
              ""
            ) : (
              <Link to={`/be-a-volunteer/${_id}`}>
                <button className='btn btn-block bg-[#6faf9f] text-white lg:px-4 lg:py-2 border-2 lg:text-lg rounded-xl lg:ml-2 hover:bg-[#727C82] border-[#f77d5c]'>
                  Be a Volunteer
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
