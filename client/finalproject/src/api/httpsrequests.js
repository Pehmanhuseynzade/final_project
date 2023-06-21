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
//3.For Media

export const getmediadatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/media`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getmediadatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/media/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getmediaDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/media/${id}`)
}

export const getmediaPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/media`,payload)
}

export const putmediaDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/media/${id}`,update)
}

//4.For spainfo Page

export const getspainfo1datas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/spainfo1`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getspainfo1datasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/spainfo1/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getspainfo1Delete = async(id)=>{
    await axios.delete(`${BASE_URL1}/spainfo1/${id}`)
}

export const getspainfo1Post = async(payload)=>{
    await axios.post(`${BASE_URL1}/spainfo1`,payload)
}

export const putspainfo1DataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/spainfo1/${id}`,update)
}

//5.For spainfo2 Page

// export const getspainfo2datas = async()=>{
//     let globalData;
//     await axios.get(`${BASE_URL1}/spainfo2`)
//     .then((res)=>{
//          globalData = res.data
//     })
//     return globalData
// }

// export const getspainfo2datasID = async(id)=>{
//     let globalData;
//     await axios.get(`${BASE_URL1}/spainfo2/${id}`)
//     .then((res)=>{
//          globalData = res.data
//     })
//     return globalData
// }

// export const getspainfo2Delete = async(id)=>{
//     await axios.delete(`${BASE_URL1}/spainfo2/${id}`)
// }

// export const getspainfo2Post = async(payload)=>{
//     await axios.post(`${BASE_URL1}/spainfo2`,payload)
// }

// export const putspainfo2DataByID = async(update,id)=>{
//     await axios.put(`${BASE_URL1}/spainfo2/${id}`,update)
// }
