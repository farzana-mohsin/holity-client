import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/post/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remainingPosts = volunteerPosts.filter(
                (request) => request._id !== _id
              );
              setVolunteerPosts(remainingPosts);
            }
          });
      }
      // if the user confirms they want to delete it, only then the data will be fetched
    });
  };

  return (
    <div>
      {volunteerPosts.map((post, index) => (
        <>
          <p key={index}>{post.postTitle}</p>
          <button>Update</button>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </>
      ))}
    </div>
  );
};

MyVolunteerPosts.propTypes = {
  post: PropTypes.object.isRequired,
};

export default MyVolunteerPosts;
