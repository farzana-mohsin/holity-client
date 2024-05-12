import Carousel from "./Carousel";
import { useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loader = useLoaderData();
  const [allItems] = useState(loader);

  return (
    <div>
      <Carousel></Carousel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12'>
        {allItems.map((item, index) => (
          <VolunteerCard
            key={index}
            item={item}
          ></VolunteerCard>
        ))}
      </div>
      <div className='mx-auto text-center my-10 p-2 border border-black rounded-xl w-48'>
        <Link to='/need-volunteers'>
          <button className='text-xl'>See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
