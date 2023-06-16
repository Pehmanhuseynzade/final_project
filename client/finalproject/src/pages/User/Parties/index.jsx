import React from 'react'
import "./parties.scss"
function Parties() {
    return (
        <>
            <div className='parties-sect'>
                <div className='text'>
                    <h2 className='h2'>Konfranslar və Tədbirlər</h2>
                    <div className='line'></div>
                    <p >Biz Şəkidə müxtəlif növ tədbirlərin təşkili üçün öz xidmətlərimizi təklif etməyə şadıq. Məkan çoxfunksiyalıdır- konfrans otaqları, restoran və bar müştərilərin ehtiyaclarına tam olaraq uyğunlaşdırılmışdır. Bütün detallar tədbir öncəsi və tədbir boyunca Sizin xidmətinizdə olacaq tədbir təşkilatçısı ilə tərtib edilə bilər.</p>
                    <p className='p' >Konfrans otağı • İclas otağı • Amfiteatr • Nuxa banket zalı • Partilər </p>
                </div>
                <div className='image'>
                    <img className='img' src="https://www.marxalresort.az/assets/images/dsc-231-1280x850-800x531.jpg" alt="" />
                </div>
            </div>

            <div className='parties-images'>
                <div className='img-1'>
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/armudu-1-800x533.jpg" alt="partieimage1" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/armudu-1-800x533.jpg" alt="partieimage2" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/armudu-1-800x533.jpg" alt="partieimage3" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/armudu-1-800x533.jpg" alt="partieimage4" />
                </div>
                <div className='img-2'>
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/443a9490-1024x683-800x534.jpg" alt="partieimage5" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/443a9490-1024x683-800x534.jpg" alt="partieimage6" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/443a9490-1024x683-800x534.jpg" alt="partieimage7" />
                    <img className='partieimages' src="https://www.marxalresort.az/assets/images/443a9490-1024x683-800x534.jpg" alt="partieimage8" />
                </div>
            </div>

        </>
    )
}

export default Parties