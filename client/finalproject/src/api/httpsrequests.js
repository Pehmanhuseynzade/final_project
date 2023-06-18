import { BASE_URL1 } from "./base_URL";
import axios from "axios"


//1.For InfoHotel

export const getInfodatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/infomarxal`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getAlldatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/infomarxal/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/infomarxal/${id}`)
}

export const getPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/infomarxal`,payload)
}

export const putDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/infomarxal/${id}`,update)
}

//2.For About Page

export const getAboutdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/about`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getAboutdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/about/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getaboutDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/about/${id}`)
}

export const getaboutPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/about`,payload)
}

export const putaboutDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/about/${id}`,update)
}