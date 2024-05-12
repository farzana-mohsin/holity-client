import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VolunteerCard = ({ item }) => {
  const { postTitle, category, deadline, thumbnail, _id } = item;

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto '>
        <div
          className='w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md flex justify-center items-center'
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>

        <div className='w-72 -mt-20 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <h3 className='py-4  font-bold tracking-wide text-center text-gray-800 dark:text-white'>
            {" "}
            {postTitle}
          </h3>
          <span className='bg-gray-700 text-white rounded-sm px-2 py-1 container mx-auto text-center flex justify-center'>
            {" "}
            {category}
          </span>

          <div className='flex items-center justify-between px-3 py-6 bg-gray-200 dark:bg-gray-700'>
            <span className='font-bold text-gray-800 dark:text-gray-200'>
              {deadline}
            </span>
            <Link to={`/post-details/${_id}`}>
              {" "}
              <button className='px-4 py-3 text-sm font-extrabold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default VolunteerCard;
