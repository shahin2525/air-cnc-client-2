// Booking  rooms
export const addBookingInfo = async (bookingData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};

// update room status
export const updateRoomStatus = async (id, status) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  const data = await response.json();
  return data;
};

// Get all bookings for guest by email
export const getBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings?email=${email}`
  );
  const bookings = await response.json();
  return bookings;
};
// Get all bookings for host
export const getHostBookings = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/host?email=${email}`
  );
  const bookings = await response.json();
  console.log(bookings);
  return bookings;
};

// delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};
