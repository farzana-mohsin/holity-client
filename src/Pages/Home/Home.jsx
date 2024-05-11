import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import SixData from "./SixData";

const Home = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);

  return (
    <div>
      <Carousel></Carousel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12'>
        {allItems
          .map((item, index) => (
            <SixData
              key={index}
              item={item}
            ></SixData>
          ))
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default Home;
