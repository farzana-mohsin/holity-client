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
      <Link to='/need-volunteers'>
        <button className='mx-auto text-center'>See All</button>
      </Link>
    </div>
  );
};

export default Home;
