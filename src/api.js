import axios from "axios";
export const endpointURL = "http://localhost:4000/";

export default {
  getData: async (query) => {
    const response = await axios.post(endpointURL, {
      query,
    });
    return response;
  },
  getProduct: async (query, id) => {
    const response = await axios.post(endpointURL, {
      query,
      variables: {
        id,
      },
    });
    return response;
  },
};
