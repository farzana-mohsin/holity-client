import { Helmet } from "react-helmet";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyVolunteerPosts from "./MyVolunteerPosts";
import MyVolunteerRequests from "./MyVolunteerRequests";

const ManageMyPosts = () => {
  return (
    <div>
      <Helmet>
        <title>Holity Social Support | Manage My Posts</title>
      </Helmet>
      <Tabs>
        <div className=' container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
            Browse Your Posts and Requests below!
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
            Volunteering is a fundamental act of good citizenship. It’s also
            essential in our society. We can also help you assess risk in
            volunteer positions, effectively deal with related legal and ethical
            issues, implement employer-supported volunteering policies in the
            workplace—and more.
          </p>
          <div className='flex items-center justify-center'>
            <TabList className='react-tabs__tab'>
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
            <div className=''>
              <MyVolunteerRequests></MyVolunteerRequests>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ManageMyPosts;
