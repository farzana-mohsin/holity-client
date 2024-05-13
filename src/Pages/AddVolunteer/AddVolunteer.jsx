import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleAddPost = (event) => {
    event.preventDefault();
    const form = event.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const email = form.email.value;
    const deadline = startDate;
    const category = form.category.value;
    const location = form.location.value;
    const numberOfVolunteers = parseInt(form.number.value);
    const description = form.description.value;
    const postData = {
      thumbnail,
      postTitle,
      deadline,
      category,
      location,
      numberOfVolunteers,
      description,
      organizer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    fetch(`${import.meta.env.VITE_API_URL}/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data inserted");
          Swal.fire({
            title: "Success!",
            text: "Post added successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
          navigate("/manage-my-posts");
        }
      });
  };

  return (
    <div
      className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12
      bg-[#f7ffff] p-24 lg:w-1/2 mx-auto py-7 lg:py-3 lg:my-5 border border-yellow-700
      rounded-lg'
    >
      <section className=' p-2 md:p-6 mx-auto'>
        <h2 className='text-4xl font-extrabold mb-6 text-center mt-0'>
          Add Volunteer Post
        </h2>

        <form onSubmit={handleAddPost}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label
                className='text-gray-700 '
                htmlFor='thumbnail'
              >
                Thumbnail
              </label>
              <input
                placeholder='Thumbnail'
                name='thumbnail'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label
                className='text-gray-700 '
                htmlFor='postTitle'
              >
                Post Title
              </label>
              <input
                placeholder='Post Title'
                name='postTitle'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='flex flex-col gap-2 py-1'>
              <label className='text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'>
                Deadline
              </label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border px-4 py-2 rounded-lg w-full mb-2'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label
                className='text-gray-700 '
                htmlFor='category'
              >
                Category
              </label>
              <select
                className='border p-2 rounded-md'
                name='category'
              >
                <option
                  disabled
                  selected
                >
                  Pick one category
                </option>
                <option value='Web Development'>Healthcare</option>
                <option value='Graphics Design'>Education</option>
                <option value='Digital Marketing'>Social Service</option>
                <option value='Digital Marketing'>Animal Welfare</option>
              </select>
            </div>
            <div>
              <label
                className='text-gray-700 '
                htmlFor='location'
              >
                Location
              </label>
              <input
                placeholder='Location'
                name='location'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 '
                htmlFor='max_price'
              >
                No. of Volunteers Needed
              </label>
              <input
                defaultValue={0}
                name='number'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 '
                htmlFor='emailAddress'
              >
                Organizer&apos;s Name
              </label>
              <input
                type='name'
                name='text'
                disabled
                defaultValue={user?.displayName}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-gray-700 '
                htmlFor='emailAddress'
              >
                Organizer&apos;s Email
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-4'>
            <label
              className='text-gray-700 '
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex  mt-6'>
            <input
              type='submit'
              className='btn-block mt-8 md:mt-0 md:px-4 md:py-2 btn bg-[#6faf9f] hover:bg-[#727C82] text-white px-2 py-1 lg:px-4 lg:py-2 border-2 border-[#f77d5c] text-lg font-bold lg:text-sm rounded-xl lg:mr-3'
              value='Add Post'
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteer;
