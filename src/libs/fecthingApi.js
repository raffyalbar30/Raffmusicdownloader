import { getApi } from "@/services/axios-client"


  export const fecthingApi = async (Url) => {
    const Response = await getApi.get(`spotify?url=${Url}`)
     return await Response.data;
  }