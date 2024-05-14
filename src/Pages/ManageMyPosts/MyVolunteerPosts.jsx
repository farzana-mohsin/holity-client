import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyVolunteerPosts = () => {
  const { user } = useContext(AuthContext);

  const [volunteerPosts, setVolunteerPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVolunteerPosts(data);
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
        fetch(`${import.meta.env.VITE_API_URL}/post/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your volunteer request has been deleted.",
                icon: "success",
              });

              const remainingPosts = volunteerPosts.filter(
                (request) => request._id !== _id
              );
              setVolunteerPosts(remainingPosts);
            }
          });
      }
      // if the user confirms they want to delete it, only then the data will be fetched
    });
  };

  return (
    <div className='w-full my-10 container mx-auto min-h-[calc(50vh-306px)]'>
      <Helmet>
        <title>Holity Social Support | My Volunteer Posts</title>
      </Helmet>
      <div>
        {volunteerPosts.length ? (
          <>
            <table className=' divide-y divide-gray-200  w-full'>
              <thead className='bg-[#d6eed7]'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 md: px-2  lg:px-8 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <div className='flex items-center gap-x-6'>
                      <span className='font-semibold'> Post Title</span>
                    </div>
                  </th>

                  <th
                    scope='col'
                    className='md:px-2 lg:px-8 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <span className='font-semibold'>Category</span>
                  </th>

                  <th
                    scope='col'
                    className='md:px-2 lg:px-8 py-3.5 text-sm  text-left rtl:text-right text-gray-500 font-semibold'
                  >
                    Deadline
                    <button className='flex items-center gap-x-2'></button>
                  </th>

                  <th
                    scope='col'
                    className='md:px-2 lg:px-8 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500'
                  >
                    Edit
                  </th>
                  <th
                    scope='col'
                    className='md:px-2 lg:px-8 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500'
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 '>
                {volunteerPosts.map((post, index) => (
                  <tr key={index}>
                    <td className='md:px-2 lg:px-8 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {post.postTitle}
                    </td>

                    <td className='md:px-2 lg:px-8 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {post.category}
                    </td>

                    <td className='md:px-2 lg:px-8 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {new Date(post.deadline).toLocaleDateString()}
                    </td>
                    <td className='md:px-2 lg:px-8 py-4 text-md text-gray-500  whitespace-nowrap flex items-center '>
                      <Link
                        to={`/update-post/${post._id}`}
                        className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
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
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className='md:px-2 lg:px-8 py-4 text-md whitespace-nowrap'>
                      <div className='flex items-center text-center'>
                        <button
                          onClick={() => handleDelete(post._id)}
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
          </>
        ) : (
          <>
            <section className='bg-white dark:bg-gray-900 h-[calc(83vh-300px)]'>
              <div className='container flex items-center px-6 py-12 mx-auto'>
                <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
                  <p className='mt-5 text-gray-500 dark:text-gray-400 text-2xl mb-6'>
                    Sorry, you don&apos;t have any volunteer posts added.
                  </p>

                  <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                    <Link to='/add-post'>
                      {" "}
                      <button className='w-1/2 px-5 py-2  tracking-wide  transition-colors duration-200  shrink-0 sm:w-auto dark:hover:bg-blue-500 dark:bg-blue-600 btn bg-[#6faf9f] text-white lg:px-4 lg:py-2  text-sm rounded-xl lg:ml-2 hover:bg-[#727C82] border-2 border-[#f77d5c]'>
                        Add Volunteer Post
                      </button>
                    </Link>

                    <button className='w-1/2 px-5 py-2  tracking-wide  transition-colors duration-200  shrink-0 sm:w-auto dark:hover:bg-blue-500 dark:bg-blue-600 btn bg-[#6faf9f] text-white lg:px-4 lg:py-2  text-sm rounded-xl lg:ml-2 hover:bg-[#727C82] border-2 border-[#f77d5c]'>
                      Take Me Home
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MyVolunteerPosts;
