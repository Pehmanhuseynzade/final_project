import React, { useEffect, useState } from 'react'
import "./parties.scss"
import { getpartiesdatas, getpartiesimgdatas } from "../../../api/httpsrequests"
function Parties() {
    const [parties, setParties] = useState([])
    const [partiesimg, setPartiesimg] = useState([])
    useEffect(() => {
        getpartiesdatas().then((data) => {
            console.log(data)
            setParties(data)
        })
    }, [])

    useEffect(() => {
        getpartiesimgdatas().then((data) => {
            console.log(data)
            setPartiesimg(data)
        })
    }, [])
    return (
        <>
            <div >
                {parties && parties.map((partiesitem) => (
                    <div key={partiesitem._id} className='parties-sect'>
                        <div className='text'>
                            <h2 className='h2'>{partiesitem.partiesname}</h2>
                            <div className='line'></div>
                            <p >{partiesitem.partiesdesc1}</p>
                            <p className='p' >{partiesitem.partiesdesc2}</p>
                        </div>
                        <div className='image'>
                            <img className='img' src={partiesitem.partiesimg} alt="partie" />
                        </div>
                    </div>
                ))}
            </div>
            <div className='parties-images'>
           {partiesimg && partiesimg.map((partiesimgitem)=>(
             <div key={partiesimgitem._id} className='img-1'>
                 <img className='partieimages' src={partiesimgitem.partieimg} alt="partieimage1" />
             </div>
           ))}
           </div>

        </>
    )
}

export default Parties