import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyVolunteerPosts = () => {
  const { user } = useContext(AuthContext);

  const [volunteerPosts, setVolunteerPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVolunteerPosts(data);
      });
  }, [user]);

  return (
    <div>
      {volunteerPosts.map((post, index) => (
        <p key={index}>{post.postTitle}</p>
      ))}
    </div>
  );
};

MyVolunteerPosts.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MyVolunteerPosts;
