import { itemApi} from "@/apis/list.api"
import { asyncGet, asyncPost } from "@/apis/rest.api"
import {Dispatch,SetStateAction} from 'react'
export const postmenu=async(payload:any)=>{
    const {data,error}=await asyncPost(itemApi.post,payload);
    if(data && !error){
        return Promise.resolve(data)
    }else{
        return Promise.reject(error)
    }
}

export const  getAllMenu=async(setter?:Dispatch<SetStateAction<any[]>>)=>{
     const {data,error}=await asyncGet(itemApi.get);
    if(data && !error){
        setter && setter(data)
        return Promise.resolve(data)

    }else{
        return Promise.reject(error)
    }
}