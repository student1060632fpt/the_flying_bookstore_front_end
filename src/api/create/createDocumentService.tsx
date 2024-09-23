import axios, { AxiosProgressEvent } from "axios";
import { port } from "../utils/env";

const CLOUD_KEY = process.env.CLOUD_KEY;

const onCreateCopy = async (data: any) => {
    try{
        const respone = await axios.request({
            method: "POST",
            maxBodyLength: Infinity,
            url: `http://${port}/api/copy`,
            headers: {
            "Content-Type": "application/json",
            },
            data,
        })
        return respone.data
    }
    catch (error) {
        console.log(error);
    }
};
const uploadFileService = async (formData: FormData, setUploadProgress: any) => {
    try{
        const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
            params: { key: CLOUD_KEY },
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const percentCompleted = progressEvent?.total
                ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                : 100;
            setUploadProgress(percentCompleted);
            },
        })
        return response.data
    }
    catch(error){
        console.error(error);
    };
}
export { onCreateCopy, uploadFileService }