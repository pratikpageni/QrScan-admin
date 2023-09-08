import { tableApi } from "@/apis/list.api"
import { asyncGet, asyncPost } from "@/apis/rest.api"
import {Dispatch,SetStateAction} from 'react'
export const postTable=async(payload:any)=>{
    const {data,error}=await asyncPost(tableApi.post,payload);
    if(data && !error){
        return Promise.resolve(data)
    }else{
        return Promise.reject(error)
    }
}

export const  getAllTable=async(setter?:Dispatch<SetStateAction<any[]>>)=>{
     const {data,error}=await asyncGet(tableApi.get);
    if(data && !error){
        setter && setter(data)
        return Promise.resolve(data)

    }else{
        return Promise.reject(error)
    }
}