// export const addRoom = async (roomData) => {
//   console.log(roomData);
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(roomData),
//   });
//   const data = await response.json();
//   return console.log(data);
// };

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
