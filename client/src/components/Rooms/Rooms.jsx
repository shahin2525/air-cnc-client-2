import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { getRooms } from "../../api/rooms";
const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // fetch("./rooms.json")
    //   .then((res) => res.json())
    getRooms()
      .then((data) => {
        if (category) {
          const filteredRoom = data.filter(
            (room) => room.category === category
          );
          console.log(filteredRoom);
          setRooms(filteredRoom);
        } else {
          setRooms(data);
        }

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
          <Heading
            title={"No rooms available in this category"}
            subtitle={"Please select others categories"}
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
