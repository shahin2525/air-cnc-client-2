import { useContext, useState } from "react";
import Button from "../Button/Button";
import Calendar from "../Rooms/Calendar";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDistance } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import { useNavigate } from "react-router-dom";
import { addBookingInfo, updateRoomStatus } from "../../api/bookings";
import toast from "react-hot-toast";
const RoomReservation = ({ roomData }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * roomData.price;

  const [value, setValue] = useState({
    startDate: new Date(roomData.from),
    endDate: new Date(roomData.to),
    key: "selection",
  });

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSelect = (ranges) => {
    setValue({ ...value });
  };

  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.hostData.email,
    location: roomData.location,
    price: totalPrice,
    to: roomData.to,
    from: roomData.from,
    title: roomData.title,
    roomId: roomData._id,
    image: roomData.image,
  });

  const modalHandler = () => {
    addBookingInfo(bookingInfo)
      .then((data) => {
        console.log(data);

        updateRoomStatus(roomData._id, true)
          .then((data) => {
            console.log(data);
            console.log(data);
            toast.success("booking successful");
            navigate("/dashboard/my-bookings");
            closeModal();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
        closeModal();
      });
  };

  return (
    <div className="bg-white rounded-xl border-[1px] overflow-hidden ">
      <div className="flex flex-row items-center gap-2 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr></hr>
      <div className="flex justify-center">
        <Calendar handleSelect={handleSelect} value={value}></Calendar>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={
            user.email === roomData?.hostData?.email || roomData.booked === true
          }
          label="Reserve"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between gap-6 text-lg ">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
        modalHandler={modalHandler}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
