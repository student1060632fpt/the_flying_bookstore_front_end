import axios from "axios";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";
const SubmitReviewService = async ( formData: any) => {
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `http://${port}/api/review`,
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