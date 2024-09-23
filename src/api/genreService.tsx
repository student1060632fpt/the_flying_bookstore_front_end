import axios from "axios";
import { port } from "../utils/env";

const genreSliceService = async () => {
    return await axios.request({
        url: `http://${port}/api/genre`,
    }).then(response => response.data)
    .catch(error => console.log(error));
}
export { genreSliceService }