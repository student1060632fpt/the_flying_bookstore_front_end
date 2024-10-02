import axios from "axios";
import { port } from "../utils/env";

const DeletePostService = async ( modalDeleteId: number | undefined) => {
    return await axios.request({
        method: "DELETE",
        url: `${port}/api/listing/${modalDeleteId}`,
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};
export { DeletePostService }