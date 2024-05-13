import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyVolunteerRequests = () => {
  const { user } = useContext(AuthContext);

  const [volunteerRequests, setVolunteerRequests] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/application-post-details/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVolunteerRequests(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/applications/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remainingRequests = volunteerRequests.filter(
                (request) => request._id !== _id
              );
              setVolunteerRequests(remainingRequests);
            }
          });
      }
    });
  };

  return (
    <div className='container mx-auto w-full my-10 h-[calc(65vh-350px)]'>
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
            >
              Cancel
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200 '>
          {volunteerRequests.map((request, index) => (
            <tr key={index}>
              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {request.postTitle}
              </td>

              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap text-center'>
                {request.numberOfVolunteers}
              </td>

              <td className='md:px-2 lg:px-6 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {new Date(request.deadline).toLocaleDateString()}
              </td>
              <td className='md:px-2 lg:px-6 py-4 text-md whitespace-nowrap'>
                <div className='flex items-center ml-4'>
                  <button
                    onClick={() => handleDelete(request._id)}
                    className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyVolunteerRequests;
