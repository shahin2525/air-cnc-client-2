import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getBookings } from "../../api/bookings";
import TableRow from "../../components/Dashboard/TableRow";
import EmptyState from "../../components/Dashboard/EmptyState";

const MyBookings = () => {
  const [bookingInfo, setBookingInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const fetchBooking = () => {
    getBookings(user?.email)
      .then((data) => {
        setBookingInfo(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchBooking();
  }, [user]);
  return (
    <>
      {bookingInfo && Array.isArray(bookingInfo) && bookingInfo.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingInfo &&
                      bookingInfo.map((booking) => (
                        <TableRow
                          key={booking._id}
                          booking={booking}
                          fetchBooking={fetchBooking}
                        ></TableRow>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message={"You did not book yet"}
          address={"/"}
          label={"Booking Browser"}
        ></EmptyState>
      )}
    </>
  );
};

export default MyBookings;
