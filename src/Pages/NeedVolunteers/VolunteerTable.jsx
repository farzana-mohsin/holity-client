import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VolunteerTable = ({ allItems }) => {
  // const { postTitle, category, deadline, thumbnail, _id } = item;
  return (
    <div>
      <table className=' divide-y divide-gray-200  w-full'>
        <thead className='bg-[#d6eed7]'>
          <tr>
            <th
              scope='col'
              className='py-3.5 md: px-2 lg:px-6 text-sm font-normal text-left rtl:text-right text-gray-500'
            >
              <div className='flex items-center gap-x-6'>
                <span className='font-semibold'>Post Title</span>
              </div>
            </th>

            <th
              scope='col'
              className='md:px-2 lg:px-6 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500'
            >
              <span className='font-semibold'>No. of Volunteers</span>
            </th>

            <th
              scope='col'
              className='md:px-2 lg:px-6 py-3.5 text-sm  text-left rtl:text-right text-gray-500 font-semibold'
            >
              Deadline
              <button className='flex items-center gap-x-2'></button>
            </th>
            <th
              scope='col'
              className='md:px-2 lg:px-6 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500'
            ></th>
          </tr>
        </thead>

        <tbody className='bg-white divide-y divide-gray-200 '>
          {allItems.map((item, index) => (
            <tr key={index}>
              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {item.postTitle}
              </td>

              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap text-center'>
                {item.numberOfVolunteers}
              </td>

              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {new Date(item.deadline).toLocaleDateString()}
              </td>
              <td className='md:px-2 lg:px-6 py-4 text-md whitespace-nowrap'>
                <div className='flex items-center ml-4'>
                  <Link to={`/post-details/${item._id}`}>
                    {" "}
                    <button className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                      View Details
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

VolunteerTable.propTypes = {
  allItems: PropTypes.array.isRequired,
};

export default VolunteerTable;
