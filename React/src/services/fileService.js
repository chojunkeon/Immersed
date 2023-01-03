import axios from "axios";
import { onGlobalError, onGlobalSuccess,API_HOST_PREFIX } from "./serviceHelpers";
const endpoint = `${API_HOST_PREFIX}/api/files`;
const getAllFiles =(pageIndex,pageSize)=>{
    const config = {
        method:"GET",
        url: `${endpoint}/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain : true,
        headers: { "Content-Type": "application/json" },
    }
    return axios(config).then(onGlobalSuccess).catch(onGlobalError)
}

const fileService = {getAllFiles}
export default fileService