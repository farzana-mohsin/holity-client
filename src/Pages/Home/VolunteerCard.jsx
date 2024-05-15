import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "animate.css";

const VolunteerCard = ({ item }) => {
  const { postTitle, category, deadline, thumbnail, _id } = item;

  return (
    <div className='animate__animated animate__zoomIn animate__repeat-2 animate__slower	3s'>
      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto'>
        <div
          className='w-full h-64 bg-[#d6eed7] bg-center bg-cover rounded-lg shadow-md flex justify-center items-center'
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>

        <div className='w-72 -mt-20 overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 bg-white '>
          <h3 className='py-4  font-bold tracking-wide text-center text-gray-800 forest:text-white'>
            {" "}
            {postTitle}
          </h3>
          <span className='bg-[#6faf9f] text-white rounded-sm px-2 py-1 container mx-auto text-center flex justify-center'>
            {" "}
            {category}
          </span>

          <div className='flex items-center justify-between px-3 py-6'>
            <span className='font-bold text-gray-800 dark:text-gray-200 '>
              {new Date(deadline).toLocaleDateString()}
            </span>
            <Link to={`/post-details/${_id}`}>
              {" "}
              <button className='px-4 py-3 text-sm font-extrabold text-white uppercase transition-colors duration-300 transform bg-[#6faf9f] rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none border-2 border-[#f77d5c]'>
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
