import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <div>
      <Heading
        title={"Sidemen Indonesia Bali "}
        subtitle={"Bali Dhaka Bangladesh"}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl pt-2">
        <img
          className="object-cover w-full rounded-xl"
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt="header image"
        />
      </div>
    </div>
  );
};

export default Header;
