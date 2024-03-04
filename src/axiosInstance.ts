import axios from "axios";

const getAuthenticatedAxiosInstance = async (user: any) => {
  const data = {
    userId: user?.id,
    name: user?.fullName,
    imageUrl: user?.imageUrl,
    emailAddress: user?.emailAddresses,
  };

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      Authorization: `${data.userId} ${data.name} ${data.imageUrl} ${data.emailAddress}`,
    },
  });

  return axiosInstance;
};

export default getAuthenticatedAxiosInstance;
