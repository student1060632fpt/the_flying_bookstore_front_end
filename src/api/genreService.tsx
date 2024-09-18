import axios from "axios";
import { ICategory } from "@/types/category";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const genreSliceService = async () => {
    return await axios.request({
        url: `http://${port}/api/genre`,
    }).then(response => response.data)
    .catch(error => console.log(error));
}
export { genreSliceService }