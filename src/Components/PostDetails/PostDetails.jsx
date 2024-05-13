import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
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
    number,
    description,
    organizer,
  } = postDetails;

  return (
    <div className='my-7 container mx-auto'>
      <Helmet>
        <title>Holity Social Support | Post Details</title>
      </Helmet>
      <div className='flex flex-col lg:flex-row items-center justify-center px-4 mb-14 lg:space-x-16 gap-8 lg:gap-20  md:px-10 lg:px-32'>
        <div>
          <h1 className='md:text-5xl font-bold leading-none text-3xl max-w-3xl '>
            {postTitle}
          </h1>
          <p className='my-8 text-lg sm:mb-12 xl:max-w-3xl '>{category}</p>
          <ul>
            <li>Deadline: {new Date(deadline).toLocaleDateString()}</li>
            <li>Number of Volunteers Needed: {number}</li>
            <li>Location: {location}</li>
            <p>Organizer&apos;s name: {organizer?.name}</p>
            <p>Organizer&apos;s email: {organizer?.email}</p>
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
      </div>
      {organizer?.email === user.email ? (
        ""
      ) : (
        <Link to={`/be-a-volunteer/${_id}`}>
          <button>Be a Volunteer</button>
        </Link>
      )}
    </div>
  );
};

export default PostDetails;
