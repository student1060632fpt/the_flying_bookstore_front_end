import axios from "axios";
import { IUser } from "../types/user";
import { port } from "../utils/env";

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