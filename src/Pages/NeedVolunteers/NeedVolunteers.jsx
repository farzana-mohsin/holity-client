import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerCard from "../Home/VolunteerCard";
import { Helmet } from "react-helmet";
import VolunteerTable from "./VolunteerTable";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";

const NeedVolunteers = () => {
  const loader = useLoaderData();
  const [allItems, setAllItems] = useState(loader);
  const [isCardLayout, setIsCardLayout] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const changeLayout = () => {
    setIsCardLayout(!isCardLayout);
  };

  const noPageFound = (
    <section className='bg-white dark:bg-gray-900 h-[calc(83vh-300px)]'>
      <div className='container flex items-center px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
          <p className='mt-5 text-gray-500 dark:text-gray-400 text-2xl'>
            Sorry, the title you are looking for doesn&apos;t exist.
          </p>

          <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button className='w-1/2 px-5 py-2  tracking-wide  transition-colors duration-200  shrink-0 sm:w-auto dark:hover:bg-blue-500 dark:bg-blue-600 btn bg-[#6faf9f] text-white lg:px-4 lg:py-2  text-sm rounded-xl lg:ml-2 hover:bg-[#727C82] border-2 border-[#f77d5c]'>
              Take me home
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const cardLayout = allItems.length ? (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12 my-10 '>
        {allItems.map((item, index) => (
          <VolunteerCard
            key={index}
            item={item}
          ></VolunteerCard>
        ))}
      </div>
    </>
  ) : (
    noPageFound
  );

  const tableLayout = allItems.length ? (
    <>
      <div className=''>
        <VolunteerTable allItems={allItems}></VolunteerTable>
      </div>
    </>
  ) : (
    noPageFound
  );

  return (
    <div className='h-[calc(100vh-300px)]'>
      <Helmet>
        <title>Holity | Volunteers Needed</title>
      </Helmet>

      <div className='flex justify-center gap-10 items-center'>
        <form
          onSubmit={handleSearch}
          className='flex my-10'
        >
          <div className='join'>
            <input
              className='input input-bordered join-item rounded-l-xl border text-sm border-[#6faf9f]'
              name='input'
              placeholder='Search here'
            />
            <button
              type='submit'
              className='btn join-item rounded-r-xl bg-[#6faf9f] text-white  border text-sm hover:bg-[#727C82] border-[#f77d5c]'
            >
              Search
            </button>
          </div>
        </form>
        <button
          onClick={() => changeLayout()}
          className='flex items-center gap-2 text-lg border p-2 rounded-xl h-fit justify-center bg-[#6faf9f] text-white lg:px-4 lg:py-2 lg:ml-2 hover:bg-[#727C82] border-[#f77d5c]'
        >
          Change Layout {isCardLayout ? <MdTableRows /> : <BsGrid3X3GapFill />}
        </button>
      </div>

      {isCardLayout ? cardLayout : tableLayout}
    </div>
  );
};

export default NeedVolunteers;
