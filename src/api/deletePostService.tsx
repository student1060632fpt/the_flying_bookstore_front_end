import axios from "axios";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";
const DeletePostService = async ( modalDeleteId: number | undefined) => {
    return await axios.request({
        method: "DELETE",
        url: `http://${port}/api/listing/${modalDeleteId}`,
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};
export { DeletePostService }