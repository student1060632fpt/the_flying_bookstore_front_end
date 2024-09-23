import axios from "axios";
import { IUser } from "../types/user";

const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const getListPostService = async (profile: IUser | null) => {
    try {
        const response = await axios.request({
            url: `http://${port}/api/listing/search/byOwnerId/` + profile?.id,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { getListPostService }