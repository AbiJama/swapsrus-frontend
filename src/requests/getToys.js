import axios from "axios";

export default function getToys() {
 return axios
  .get("http://localhost:4000/toys")
  .then((response) => response.data)
  .catch((error) => console.log(error));
}
