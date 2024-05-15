import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

const ExtraSection2 = () => {
  return (
    <div className='container mx-auto min-h-[400px] my-20 lg:mb-32 lg:mt-16 w-full'>
      <h1 className='text-2xl lg:text-4xl text-center font-bold my-16'>
        Welcome to Holity, a nationwide charitable, <br />
        non-profit organization
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-center mb-24 gap-8 lg:gap-8'>
        {/* <Animate
          animationIn='zoomIn'
          animationOut='zoomOut'
          animationInDuration={1400}
          animationOutDuration={1400}
          isVisible={true}
        > */}
        <div className='lg:w-1/2 bg-orange-200 pr-14 pl-8 py-24 space-y-6 shadow-2xl'>
          <h2 className='text-3xl font-bold'>
            <span className='text-5xl'>
              <TbCircleNumber1Filled />
            </span>
            Our Mission
          </h2>
          <p>
            We see our mission in generating resources through fundraising
            initiatives and partnership
          </p>
        </div>
        {/* </Animate> */}
        <div className='lg:w-1/2 bg-[#bff0e4] pr-14 pl-8 py-24 space-y-6 shadow-2xl'>
          <h2 className='text-3xl font-bold'>
            <span className='text-5xl'>
              <TbCircleNumber2Filled />
            </span>
            Our Vision
          </h2>
          <p>
            We aim to grant wishes that will give hope to people in need in
            communities across the world
          </p>
        </div>
        <div className='lg:w-1/2 bg-[#f7e4c8] pr-14 pl-8 py-24 space-y-6 shadow-2xl'>
          <h2 className='text-3xl font-bold'>
            <span className='text-5xl'>
              <TbCircleNumber3Filled />
            </span>
            Our Goal
          </h2>
          <p>
            The goal of our organization is to reduce the inequity in access to
            education & healthcare
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
