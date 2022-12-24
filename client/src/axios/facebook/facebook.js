 
import axiosClient from "../index";

const authApi = {

  facebookAuth: async (accessToken) => {
    try {
      const url = "/users/auth/facebook";
      const access_token = accessToken;
      return axiosClient.post(url, { access_token });
    } catch (error) {
      console.log(error);
    }
  },
};

export default authApi;
