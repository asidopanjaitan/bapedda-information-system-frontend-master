import axios from "axios";

export const getKuesionerApi = (callback) => {
  axios
    .get("http://192.168.0.119:8080/manajemen-kuesioner/all-kuesioner?size=100")
    .then((res) => {
      callback(res.data.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
};
