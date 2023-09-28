import Button from "../Button/Button";
import Calendar from "../Rooms/Calendar";
const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] overflow-hidden ">
      <div className="flex flex-row items-center gap-2 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr></hr>
      <Calendar></Calendar>
      <hr />
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between gap-6 text-lg ">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
