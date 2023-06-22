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

//5.For spaimages

export const getspaimagesdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/spaimages`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getspaimagesdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/spaimages/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getspaimagesDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/spaimages/${id}`)
}

export const getspaimagesPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/spaimages`,payload)
}

export const putspaimagesDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/spaimages/${id}`,update)
}

//6.For Parties

export const getpartiesdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/parties`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpartiesdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/parties/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpartiesDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/parties/${id}`)
}

export const getpartiesPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/parties`,payload)
}

export const putpartiesDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/parties/${id}`,update)
}

//7.For Partiesimg

export const getpartiesimgdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/partieimg`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpartiesimgdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/partieimg/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpartiesimgDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/partieimg/${id}`)
}

export const getpartiesimgPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/partieimg`,payload)
}

export const putpartiesimgDataByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/partieimg/${id}`,update)
}

//8.For Tour

export const gettourdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/tour`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/tour/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/tour/${id}`)
}

export const gettourPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/tour`,payload)
}

export const puttourByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/tour/${id}`,update)
}

//9.For Tourimg

export const gettourimgdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/tourimg`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourimgdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/tourimg/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettourimgDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/tourimg/${id}`)
}

export const gettourimgPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/tourimg`,payload)
}

export const puttourimgByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/tourimg/${id}`,update)
}

//10.For Entment

export const getentmentdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/entment`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getentmentdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/entment/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getentmentDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/entment/${id}`)
}

export const getentmentPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/entment`,payload)
}

export const putentmentByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/entment/${id}`,update)
}

//11.For Entmentimg

export const getentmentimgdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/entmentimg`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getentmentimgdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/entmentimg/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getentmentimgDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/entmentimg/${id}`)
}

export const getentmentimgPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/entmentimg`,payload)
}

export const putentmentimgByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/entmentimg/${id}`,update)
}


//12.For Res

export const getresdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/res`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getresdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/res/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getresDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/res/${id}`)
}

export const getresPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/res`,payload)
}

export const putresByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/res/${id}`,update)
}

//13.For Roominfo

export const getroominfodatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/roominfo`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getroominfodatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/roominfo/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getroominfoDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/roominfo/${id}`)
}

export const getroominfoPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/roominfo`,payload)
}

export const putroominfoByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/roominfo/${id}`,update)
}

//14.For Rooms

export const getroomsdatas = async()=>{
    let globalData;
    await axios.get(`${BASE_URL1}/rooms`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getroomsdatasID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL1}/rooms/${id}`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getroomsDelete = async(id)=>{
    await axios.delete(`${BASE_URL1}/rooms/${id}`)
}

export const getroomsPost = async(payload)=>{
    await axios.post(`${BASE_URL1}/rooms`,payload)
}

export const putroomsByID = async(update,id)=>{
    await axios.put(`${BASE_URL1}/rooms/${id}`,update)
}

// //15.For Home

// export const gethomedatas = async()=>{
//     let globalData;
//     await axios.get(`${BASE_URL1}/home`)
//     .then((res)=>{
//          globalData = res.data
//     })
//     return globalData
// }

// export const gethomedatasID = async(id)=>{
//     let globalData;
//     await axios.get(`${BASE_URL1}/home/${id}`)
//     .then((res)=>{
//          globalData = res.data
//     })
//     return globalData
// }

// export const gethomeDelete = async(id)=>{
//     await axios.delete(`${BASE_URL1}/home/${id}`)
// }

// export const gethomePost = async(payload)=>{
//     await axios.post(`${BASE_URL1}/home`,payload)
// }

// export const puthomeByID = async(update,id)=>{
//     await axios.put(`${BASE_URL1}/home/${id}`,update)
// }