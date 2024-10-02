import axios from "axios";
import { port } from "../utils/env";
const SubmitReviewService = async ( formData: any) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${port}/api/review`,
        headers: {
            "Content-Type": "application/json",
        },
        data: formData,
    };
    return await axios
        .request(config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
}
export { SubmitReviewService }