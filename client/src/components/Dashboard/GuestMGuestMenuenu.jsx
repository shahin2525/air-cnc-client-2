import { NavLink, useNavigate } from "react-router-dom";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import HostModal from "../Modal/HostRequestModal";
import { becomeHost } from "../../api/auth";
import toast from "react-hot-toast";
const GuestMenu = () => {
  const navigate = useNavigate();
  const { role, user, setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = (email) => {
    becomeHost(email)
      .then((data) => {
        console.log(data);
        toast.success("host set successfully");
        setRole("host");
        navigate("/dashboard/add-room");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsFingerprint className="w-5 h-5" />

        <span className="mx-4 font-medium">My Bookings</span>
      </NavLink>

      {!role && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        isOpen={isOpen}
        modalHandler={modalHandler}
        email={user?.email}
        closeModal={closeModal}
      ></HostModal>
    </>
  );
};

export default GuestMenu;
