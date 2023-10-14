// Add  rooms
export const addRoom = async (roomData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(roomData),
  });

  const data = await response.json();
  return data;
};
// get all rooms
export const getRooms = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);
  const data = await response.json();

  return data;
};
// get single room
export const getRoom = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`);
  const data = await response.json();
  return data;
};
// get filter room for host
export const getHostRooms = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/${email}`,
    {
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
// delete rooms
export const deleteRooms = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
