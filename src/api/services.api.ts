import axios from "axios";

export const getServices = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/services");
    return res;
};
