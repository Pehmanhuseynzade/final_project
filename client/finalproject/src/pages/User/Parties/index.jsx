import React, { useEffect, useState } from 'react'
import "./parties.scss"
import { getpartiesdatas, getpartiesimgdatas } from "../../../api/httpsrequests"
import { SRLWrapper } from "simple-react-lightbox";
import { Helmet } from "react-helmet";

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
            <Helmet>
                <title>Parties</title>
                <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
                <meta
                    name="description"
                    content="Beginner friendly page for learning React Helmet."
                />
            </Helmet>
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
                            <img className='img' src={partiesitem.partiesimg} />
                        </div>
                    </div>
                ))}
            </div>
            <SRLWrapper>
                <div className='parties-images'>
                    {partiesimg && partiesimg.map((partiesimgitem) => (
                        <div key={partiesimgitem._id} className='img-1'>
                            <img className='partieimages' src={partiesimgitem.partieimg} />
                            <div class="overlay">
                            </div>
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </>
    )
}

export default Parties