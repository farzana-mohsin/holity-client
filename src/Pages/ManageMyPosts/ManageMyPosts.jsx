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
            Browse Jobs By Categories
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
            Three categories available for the time being. They are Web
            Development, Graphics Design and Digital Marketing. Browse them by
            clicking on the tabs below.
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
