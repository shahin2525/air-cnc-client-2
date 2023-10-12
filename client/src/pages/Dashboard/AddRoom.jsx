import React, { useContext, useState } from "react";

import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utilities";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddRoom = () => {
  const navigate = useNavigate();
  const [imageUploadText, setImageUploadText] = useState("image upload");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const location = event.target.location.value;
    const category = event.target.category.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const title = event.target.title.value;

    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setImageUploadText("uploading ...");
    // image upload
    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          category,
          from,
          to,
          title,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data.data.display_url,
          hostData: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        };
        // post data  to server
        addRoom(roomData)
          .then((data) => {
            console.log(data);
            setImageUploadText("uploaded");
            toast.success("room added successfully");

            navigate("/dashboard/my-listings");
          })

          .catch((err) => console.log(err));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleImageChange = (image) => {
    // console.log(image);
    setImageUploadText(image.name);
  };
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        imageUploadText={imageUploadText}
        handleImageChange={handleImageChange}
        dates={dates}
        handleDates={handleDates}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
