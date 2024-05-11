import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerCard from "../Home/VolunteerCard";

const NeedVolunteers = () => {
  const loader = useLoaderData();
  const [allItems] = useState(loader);

  return (
    <div>
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
