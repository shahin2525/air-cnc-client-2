import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseUrl: `${import.meta.env.VITE_API_URL}`,
});
const useAxiosSecure = () => {
  // 1 request intercepts client to server
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = `bearer ${localStorage.getItem("access-token")}`;
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });
    // 2 response intercept server to client
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          (error.response && error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return [axiosSecure];
};

export default useAxiosSecure;
