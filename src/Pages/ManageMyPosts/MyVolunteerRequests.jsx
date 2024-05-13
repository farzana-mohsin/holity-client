import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
        fetch(`${import.meta.env.VITE_API_URL}/applications/${_id}`, {
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

              const remainingRequests = volunteerRequests.filter(
                (request) => request._id !== _id
              );
              setVolunteerRequests(remainingRequests);
            }
          });
      }
      // if the user confirms they want to delete it, only then the data will be fetched
    });
  };

  return (
    <div className='container mx-auto flex '>
      {volunteerRequests.map((post, index) => (
        <div key={index}>
          <h1>{post.category}</h1>
          <button onClick={() => handleDelete(post._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default MyVolunteerRequests;
