import { DateRange } from "react-date-range";

const DatePicker = ({ handleSelect, value }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      date={value.startDate}
      ranges={[value]}
      onChange={handleSelect}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endData}
    />
  );
};

export default DatePicker;
