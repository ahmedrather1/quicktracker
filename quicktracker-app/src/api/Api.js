import axios from "axios";
function Api() {}

Api.prototype.get = async function (path, body) {
  let axiosApi = axios.create();

  try {
    const resp = await axiosApi.get(path, body);
    return resp;
  } catch (error) {
    console.log("error data:");
    console.log(error.response);
  }
};

Api.prototype.post = async function (path, body) {
  let axiosApi = axios.create();

  try {
    const resp = await axiosApi.post(path, body);
    return resp;
  } catch (error) {
    console.log("error data:");
    console.log(error.response);
  }
};

Api.prototype.delete = async function (path, body) {
  let axiosApi = axios.create();

  try {
    const resp = await axiosApi.delete(path, body);
    return resp;
  } catch (error) {
    console.log("error data:");
    console.log(error.response);
  }
};

export default Api;
