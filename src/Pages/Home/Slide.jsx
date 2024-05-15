import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem] mx-0'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/25'>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/need-volunteers'
            className='w-full p-2 lg:px-5 lg:py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#6faf9f] rounded-md lg:w-auto hover:bg-[#727C82] focus:outline-double focus:bg-[#f77d5c] border'
          >
            Available Volunteer Positions
          </Link>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Slide;
