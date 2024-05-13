import Carousel from "./Carousel";
import { useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link, useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet";

const Home = () => {
  const loader = useLoaderData();
  const [allItems] = useState(loader);

  return (
    <div>
      <Helmet>
        <title>Holity Social Support | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12 animate__animated animate__fadeInLeft '>
        {allItems.map((item, index) => (
          <VolunteerCard
            key={index}
            item={item}
          ></VolunteerCard>
        ))}
      </div>
      <div className='mx-auto text-center my-10 p-2 border-[#f77d5c] w-48 bg-[#6faf9f] text-white lg:px-4 lg:py-2 border-2 text-sm rounded-xl hover:bg-[#727C82]'>
        <Link to='/need-volunteers'>
          <button className='text-xl'>See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
