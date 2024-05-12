import { useLoaderData } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PostDetails = () => {
  const { user } = useContext(AuthContext);

  const loader = useLoaderData();
  const [postDetails] = useState(loader);

  const {
    postTitle,
    category,
    deadline,
    thumbnail,
    location,
    number,
    description,
    postCreator,
  } = postDetails;

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
        <p>{postCreator?.name}</p>
        <p>{postCreator?.email}</p>
        <p>{postCreator?.photo}</p>
      </div>
      {postCreator?.email === user.email ? "" : <button>Be a Volunteer</button>}
    </div>
  );
};

export default PostDetails;
