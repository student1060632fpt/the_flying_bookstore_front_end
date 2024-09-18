import axios from "axios";
import { useAuthStore } from "../../hooks/user";

const { token } = useAuthStore();
const port = process.env.NEXT_PUBLIC_API_URL || "localhost:8082";

const onSubmitService = async ( data: any) => {
    try{
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
    catch(error){
        console.log(error);
    };
};
export { onSubmitService }