import axios from "axios";
import { port } from "../../utils/env";


const onCreateListing = async (data: any, token: string | null) => {
    try {
        const respone = await axios.request({
            method: "POST",
            maxBodyLength: Infinity,
            url: `http://${port}/api/listing`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data,
        });
        return respone.data;
    }
    catch (error) {
        console.log(error);
    };
};
export { onCreateListing }