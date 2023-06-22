import React, { useEffect, useState } from 'react'
import "./entertainment.scss"
import { getentmentdatas, getentmentimgdatas } from '../../../api/httpsrequests'
function Entertainment() {
    const [entment, setEntment] = useState([])
    const [entmentimg, setEntmentimg] = useState([])
    useEffect(() => {
        getentmentdatas().then((data) => {
            setEntment(data)
            console.log(data)
        })
    }, [])
    useEffect(() => {
        getentmentimgdatas().then((data) => {
            setEntmentimg(data)
            console.log(data)
        })
    }, [])
    return (
        <>
            <div className='main-sec-ent'>
                <img className='ent-main-image' src="https://www.marxalresort.az/assets/images/016-1280x800.jpg" alt="entertainment" />
                <h1>Əyləncə</h1>
                <p className='p-info'>Bizim Kompleks qonaqlarına müasir avadanlıqlarla təchiz olunmuş, peşəkar heyət və ləziz mətbəxi ilə bir neçə restoran təqdim edir.Siz bizim restoranlarımızda milli və xarici mətbəxin təamlarını dada bilərsiniz</p>
                <p className='p-info-bold'>Boulinq zalı • Bilyard otağı • Gecə klubu • Karaoke launç • Kitabxana • Kinozal • Stolüstü tennis • Əyləncəli oyun aparatları • Uşaqlar üçün əyləncə mərkəzi • Lazerstrayk • Playstation • Katamaran</p>
                <div className='ent-info'>
                    <div>
                        <img className='ent' src="https://www.marxalresort.az/assets/images/800x533-578x385.jpg" alt="ent1" />
                    </div>
                    <div>
                        <img className='ent' src="https://www.marxalresort.az/assets/images/800x5334-578x385.jpg" alt="ent2" />
                    </div>
                    <div>
                        <img className='ent' src="https://www.marxalresort.az/assets/images/eylence-2-800x536.jpeg" alt="ent3" />
                    </div>
                    <div>
                        <img className='ent' src="https://www.marxalresort.az/assets/images/2-3-327x219.jpg" alt="ent4" />
                    </div>
                </div>
            </div>

            <section className='for-entment'>
                {entment && entment.map((entmentitem, idx) => (
                    <div key={entmentitem._id}>
                        {idx % 2 ? (<div className='entment-sect-1'>
                            <div className='image'>
                                <img className='img' src={entmentitem.entmentimg} alt="entmentimage1" />
                            </div>
                            <div className='text'>
                                <h2 className='h2'>{entmentitem.entmentname}</h2>
                                <div className='line'></div>
                                <p >{entmentitem.entmentdesc1}</p>
                                <p className='p' >{entmentitem.entmentdesc}</p>
                            </div>
                        </div>) : (<div className='entment-sect-1'>
                            <div className='text'>
                                <h2 className='h2'>{entmentitem.entmentname}</h2>
                                <div className='line'></div>
                                <p >{entmentitem.entmentdesc}</p>
                                <p className='p' >{entmentitem.entmentdesc}</p>
                            </div>
                            <div className='image'>
                                <img className='img' src={entmentitem.entmentimg} alt="entmentimage1" />
                            </div>
                        </div>)}
                    </div>
                ))}
            </section>

            <div className='ent-images'>
                {entmentimg && entmentimg.map((entimgitem) => (
                    <div key={entimgitem._id} className='img-2'>
                        <img className='entimages' src={entimgitem.entmentimgs} alt="entimage1" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Entertainment