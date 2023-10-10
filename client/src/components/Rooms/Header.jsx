import Heading from "../Heading/Heading";

const Header = ({ roomData }) => {
  // console.log(roomData);
  return (
    <div>
      <Heading title={roomData.title} subtitle={roomData.location}></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl pt-2">
        <img
          className="object-cover w-full rounded-xl"
          src={roomData.image}
          alt="header image"
        />
      </div>
    </div>
  );
};

export default Header;
