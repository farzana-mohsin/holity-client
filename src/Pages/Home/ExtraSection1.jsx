import "./styles.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const ExtraSection1 = () => {
  const count1 = useMotionValue(8000);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(10000);
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  // const rounded3 = useTransform(count * 300, Math.round);

  useEffect(() => {
    animate(count1, 12755, {
      duration: 4,
    });
    animate(count2, 100, {
      duration: 4,
    });
    animate(count3, 1560300, {
      duration: 4,
    });
  }, []);

  return (
    <div className="bg-[url('https://i.ibb.co/LR9ggg9/pasted-image-0-6.png')] bg-cover bg-no-repeat bg-center h-screen">
      <h2 className=' text-3xl lg:text-7xl font-bold text-white text-center py-20'>
        How You Can Help
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
        <div className='w-full flex flex-col my-16'>
          <motion.h1 id='extraSection'>{rounded1}</motion.h1>
          <h2 className='text-white text-3xl font-bold'>
            Numbers of Volunteers
          </h2>
          <p className='w-1/2 text-white text-xl mb-7'>
            We are more than ten thousand volunteers in different countries.
          </p>
        </div>
        <div className='w-full mx-auto'>
          <motion.h1 id='extraSection'>{rounded2}</motion.h1>
          <h2 className='text-white text-3xl font-bold'>Numbers of Projects</h2>
          <p className='w-1/2 text-white text-xl mb-7'>
            Our primary objectives are philanthropy and social well-being.
          </p>
        </div>
        <div className='w-full'>
          <motion.h1 id='extraSection'>{rounded3}</motion.h1>
          <h2 className='text-white text-3xl font-bold mb-7'>
            Numbers of Volunteer Hours
          </h2>
          <p className=' text-[#c1f5e5] text-xl mb-7'>
            Volunteers are a valuable resource to support the planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
