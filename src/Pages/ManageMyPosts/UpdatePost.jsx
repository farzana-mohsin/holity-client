import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  console.log(loader);

  const {
    location,
    _id,
    postTitle,
    category,
    deadline,
    thumbnail,
    numberOfVolunteers,
    description,
  } = loader || {};

  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const handleUpdatePost = (event) => {
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

    console.log("cookie: " + document.cookie);

    fetch(`${import.meta.env.VITE_API_URL}/post/${_id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Post updated successfully",
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
      bg-[#2f9984] bg-opacity-80 p-24 w-full lg:w-1/2 mx-auto py-7 lg:py-3 lg:my-5 border-2  border-yellow-700
      rounded-lg'
    >
      <Helmet>
        <title>Holity Social Support | Update Post</title>
      </Helmet>
      <section className='p-2 md:p-6 mx-auto'>
        <h2 className='text-2xl lg:text-4xl font-extrabold mb-6 text-center mt-0 text-white'>
          Update Volunteer Post
        </h2>

        <form onSubmit={handleUpdatePost}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label
                className='text-white'
                htmlFor='thumbnail'
              >
                Thumbnail
              </label>
              <input
                defaultValue={thumbnail}
                placeholder='Thumbnail'
                name='thumbnail'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label
                className='text-white'
                htmlFor='postTitle'
              >
                Post Title
              </label>
              <input
                defaultValue={postTitle}
                placeholder='Post Title'
                name='postTitle'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>

            <div className='flex flex-col gap-2 py-1'>
              <label className='text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'>
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
                className='text-white'
                htmlFor='category'
              >
                Category
              </label>
              <select
                className='border p-2 rounded-md'
                name='category'
                defaultValue={category}
              >
                <option
                  disabled
                  selected
                >
                  Pick one category
                </option>

                <option>Healthcare</option>
                <option>Education</option>
                <option>Social Service</option>
                <option>Animal Welfare</option>
              </select>
            </div>
            <div>
              <label
                className='text-white'
                htmlFor='location'
              >
                Location
              </label>
              <input
                defaultValue={location}
                name='location'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-white'
                htmlFor='max_price'
              >
                No. of Volunteers Needed
              </label>
              <input
                defaultValue={numberOfVolunteers}
                name='number'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-white'
                htmlFor='emailAddress'
              >
                Organizer&apos;s Name
              </label>
              <input
                type='name'
                name='text'
                disabled
                defaultValue={user?.displayName}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label
                className='text-white'
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
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-4'>
            <label
              className='text-white'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              defaultValue={description}
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex mt-6'>
            <input
              type='submit'
              className='btn-block px-8 py-3 font-semibold bg-opacity-80 border-white btn bg-[#ff9954] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl hover:bg-[#727C82]'
              value='Update Post'
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdatePost;
