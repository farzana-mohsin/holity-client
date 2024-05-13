import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Provider/AuthProvider";
import MyVolunteerPosts from "./MyVolunteerPosts";
import MyVolunteerRequests from "./MyVolunteerRequests";

const ManageMyPosts = () => {
  // useEffect(() => {
  //   const allData = fetch(
  //     `${import.meta.env.VITE_API_URL}/application-requests/:email`
  //   );
  //   const filteredItems = allData
  //     ?.filter((item) => item?.email === user?.email)
  //     .then((res) => res.json(filteredItems))
  //     .then((data) => setVolunteerRequests(data));
  // }, [loader, user?.email]);

  return (
    <div>
      <Tabs>
        <div className=' container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
            Browse Jobs By Categories
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
            Three categories available for the time being. They are Web
            Development, Graphics Design and Digital Marketing. Browse them by
            clicking on the tabs below.
          </p>
          <div className='flex items-center justify-center'>
            <TabList>
              <Tab>My Volunteer Posts</Tab>
              <Tab>My Volunteer Requests</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className=''>
              <MyVolunteerPosts></MyVolunteerPosts>
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <MyVolunteerRequests></MyVolunteerRequests>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ManageMyPosts;
