import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link, useLoaderData } from "react-router-dom";
import "animate.css";
import { Helmet } from "react-helmet";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";

const Home = () => {
  const loader = useLoaderData();
  const [allItems] = useState(loader);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Holity Social Support | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <h1 className='text-center text-3xl lg:text-6xl font-bold'>
        Our Campaigns
      </h1>
      <p className='text-lg text-gray-500 text-center w-full lg:w-1/2 mx-auto mb-10 lg:mb-20 mt-5'>
        We regularly organize charitable campaigns aimed at changing the lives
        of people around the world Make your donation today to change the lives
        of people globally. Even the smallest contributions matter!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12 animate__animated animate__zoomIn animate__repeat-2 animate__slower	3s animate__delay-3s'>
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
      <ExtraSection2></ExtraSection2>
      <ExtraSection1></ExtraSection1>
    </div>
  );
};

export default Home;
