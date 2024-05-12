import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerCard from "../Home/VolunteerCard";

const NeedVolunteers = () => {
  const loader = useLoaderData();
  const [allItems, setAllItems] = useState(loader);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.input.value;
    const searchString = input;
    // console.log(searchString);

    // fetch
    //then, ...
    // setAllItems
    fetch(`${import.meta.env.VITE_API_URL}/posts-by-title`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ key: searchString }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className='flex justify-center mx-auto'
      >
        <label className='input input-bordered border-black flex items-center gap-2 w-1/4 my-10'>
          <input
            name='input'
            type='text'
            className='grow'
            placeholder='Search'
          />
        </label>
        <button type='submit'>Click to search</button>
      </form>

      {allItems.length ? (
        "code below"
      ) : (
        <>
          <section className='bg-white dark:bg-gray-900 '>
            <div className='container flex items-center px-6 py-12 mx-auto'>
              <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
                <p className='p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                    />
                  </svg>
                </p>
                <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
                  Page not found
                </h1>
                <p className='mt-4 text-gray-500 dark:text-gray-400'>
                  The page you are looking for doesn't exist. Here are some
                  helpful links:
                </p>

                <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                  <button className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'>
                    Take me home
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12 my-10'>
        {allItems.map((item, index) => (
          <VolunteerCard
            key={index}
            item={item}
          ></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteers;
