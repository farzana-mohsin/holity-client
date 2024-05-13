import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyVolunteerRequests = () => {
  const { user } = useContext(AuthContext);

  const [volunteerRequests, setVolunteerRequests] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/application-post-details/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVolunteerRequests(data);
      });
  }, [user]);

  return (
    <div>
      {volunteerRequests.map((post, index) => (
        <p key={index}>{post.category}</p>
      ))}
    </div>
  );
};

export default MyVolunteerRequests;
