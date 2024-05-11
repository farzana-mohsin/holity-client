import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerCards from "../Home/VolunteerCards";

const NeedVolunteers = () => {
  const loader = useLoaderData();
  const [allItems, setAllItems] = useState([loader]);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-12'>
        {allItems
          .map((item, index) => (
            <VolunteerCards
              key={index}
              item={item}
            ></VolunteerCards>
          ))
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default NeedVolunteers;
