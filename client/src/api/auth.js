// saved user in mongodb
export const savedUser = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// become host
export const becomeHost = async (email) => {
  const currentUser = {
    role: "host",
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }
  );

  const data = await response.json();
  return data;
};
// get role
export const getRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );

  const user = await response.json();

  return user?.role;
};
