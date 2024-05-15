# Assignment Eleven

- Assignment_category_0010
- Github server side link: https://github.com/Porgramming-Hero-web-course/b9a11-server-side-farzana-mohsin
- Github client side link: https://github.com/Porgramming-Hero-web-course/b9a11-client-side-farzana-mohsin
- live site link: https://assignment-eleven-a257a.web.app/

## Holity Social Support

- This project is a web application that allows users to browse through a volunteer website, browse different volunteer options. Users need to be logged in to view private routes.
- Once logged in, users can add a volunteer post, users can also apply to be a volunteer on other's posts. Users can view details of a volunteer post.
- The website provides a user-friendly interface and offers various features to enhance productivity.

## Key Features

- Navbar, Banner, Volunteers Needed, and Footer sections are publicly available.

- User authentication

  - The application allows users to create accounts and log in to access their tasks and settings.
  - The register and login have multiple credentials which are shown by toasts.
  - User can also login via their Google or Github accounts.

- The `Homepage` features the banner, six cards volunteer posts and two extra sections

  - The navbar is responsive and will show the buttons for private routes if a user is logged in
  - A hover dropdown is used under My Profile
  - User display name is visible on hover once the user is logged in
  - Two extra sections are Holity's values and How You can Help. On How you can help section, `Framer's Motion` animation is used for dynamic numbers count.

- On the `Need Volunteers` page, users can browse all the volunteer posts

  - Users can also search volunteer posts by Post Title
  - If there is no matching search title, users will see a message and a button to go to homepage.
  - Two types of layouts are used to show the volunteer posts. Users can switch between table and card layout by clicking on the `Change Layout` button

- The volunteer posts are sorted by date, with the oncoming deadline ones appearing first.
- Private Routes - The application has multiple private routes, which are visible only if the users are logged in.
- The `Add Volunteer Post` page has the ability to add new volunteer post once the user is logged in.
- An `Error page` is added with a button to go to homepage incase a user tries to go to a route that doesn't exist

- Under `Manage My Posts` private route - a tab format is used for these two section. - `My Volunteer Posts` & `My Volunteer Requests`.

  - Users are able to see their added posts and their requested volunteer posts under Manage My Posts.
  - If there are not posts added or requests submitted, users will see buttons to add a post, see all volunteer positions, or directly go to homepage.
  - Users have the ability to update and delete their volunteer posts from My Volunteer Posts. Users can also cancel their request to be a volunteer from My Volunteer Requests section.

- Once clicking on `View Details` from a volunteer post, the user needs to log in and once logged in, the user can see all the details of that post. The user can also apply for the volunteer post by clicking on `Be a Volunteer`

  - `Be a Volunteer` button is only visible to the volunteers and not the organizers. This button is also invisible if the post doesn't need any more volunteers.

- Integration with other tools

  - The application has been integrated with popular productivity tools, such as Framer Motion, Slider, React Helmet, React Tabs, React Datepicker, Animate.css
  - React toastify were used to show the success and error messages
  - Images were hosted on imgbb.

- Mobile and tablet friendly: The web application is responsive and optimized for mobile devices, allowing users to manage tasks on the go.
- Firebase config keys have been transferred to .env.local file.
- MongoDB username and password have been transferred to .env file with encrypted code.
- JWT is used to protect the backend data of private routes. Middlewares were used to verify the token and email addresses. `clearCookie` is used to remove the token once the user logs out.
