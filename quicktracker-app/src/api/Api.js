import axios from "axios";
function Api() {}

Api.prototype.get = async function (path, body) {
  let axiosApi = axios.create();

  try {
    const resp = await axiosApi.get(path, body);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log("error data:");
    console.log(error.response);
  }
};

export default Api;
