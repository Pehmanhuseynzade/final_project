import React from 'react'
import "./restaurant.scss"
function Restaurant() {
  return (
    <>
    <div className='main-sec-res'>
      <img className='rest-main-image' src="http://www.marxalresort.az/assets/images/35911-photo-r-1-1024x6825.jpg" alt="restaurant" />
      <h1>BAR VƏ RESTORANLAR</h1>
      <p className='p-info'>Bizim Kompleks qonaqlarına müasir avadanlıqlarla təchiz olunmuş, peşəkar heyət və ləziz mətbəxi ilə bir neçə restoran təqdim edir.Siz bizim restoranlarımızda milli və xarici mətbəxin təamlarını dada bilərsiniz</p>
      <div className='rest-info'>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/12-534x356.jpg" alt="rest1" />
        <p>İpək Restoranı</p>
        <div><button className='btnn'>Ətraflı</button></div>
        </div>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/8-1-1275x850-800x533.jpg" alt="rest2" />
        <p>Nuxa Restoranı</p>
        <div><button className='btnn'>Ətraflı</button></div>
        </div>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/4-534x356.jpg" alt="rest3" />
        <p>Lobbi Bar</p>
        <div><button className='btnn'>Ətraflı</button></div>
        </div>
        <div>
          <img className='restaurants' src="https://www.marxalresort.az/assets/images/3-534x356.jpg" alt="rest4" />
          <p>Göl Kafe</p>
          <div><button className='btnn'>Ətraflı</button></div>
        </div>
      </div>
    </div>

    <div className='rest-sect-1'>
        <div className='text'>
          <h2 className='h2'>İpək Restoranı</h2>
          <div className='line'></div>
          <p className='p' >Səhər yeməyi yalnız yemək deyil, günə başlamaq üçün bir mərasimdir. Rahat və sərbəst bir səhər yeməyi Sizi enerji ilə təmin etmək və gün boyu xoş əhval-ruhiyyə qazandırmaq üçün hazırlanmışdır. Buna görə İpək Restoranının qapıları hər gün ləzzətli bir səhər yeməyi üçün açıqdır. Səhər yeməyini sevənlər üçün restoranımızın yay terrası günəşin ilk şüaları ilə bərabər fəaliyyətə başlayır.</p>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/12-1264x843.jpg" alt="" />
        </div>
      </div>

      <div className='rest-images'>
        <div className='img-1'>
          <img className='restimages' src="https://www.marxalresort.az/assets/images/800x5338jh-800x533-800x533.jpg" alt="spaimage1" />
          <img className='restimages' src="https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg" alt="spaimage2" />
          <img className='restimages' src="https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg" alt="spaimage3" />
          <img className='restimages' src="https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg" alt="spaimage4" />
        </div>
        </div>

      <div className='rest-sect-2'>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/nuxa-945x590.jpg" alt="" />
        </div>
        <div className='text'>
          <h2 className='h2'>Nuxa Restoranı</h2>
          <div className='line'></div>
          <p className='p'>Nuxa Restoranında Siz ənənəvi Azərbaycan yeməkləri ilə yanaşı dadlı və ləziz təamlar tapa biləcəksiniz.Nuxa Restoranının terrası möhtəşəm mənzərədən həzz alaraq qayğılardan uzaq olub rahatlaşmağın yeganə yollarından biridir. Bura kompleksimizin parlaq və romantik məkanlarından biridir. Burada Siz rahat bir mühitdə və özünüzü sərbəst hiss edib milli yeməklərimizdən həzz ala bilərsiniz.  </p>
        </div>
      </div>
      <div className='rest-images'>
        <div className='img-2'>
          <img className='restimages' src='https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg'  alt="spaimage1" />
          <img className='restimages' src='https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg' alt="spaimage2" />
          <img className='restimages' src='https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg' alt="spaimage3" />
          <img className='restimages' src='https://www.marxalresort.az/assets/images/800x53310-800x533-800x533.jpg' alt="spaimage4" />
        </div>
        </div>
    </>
    )
}

export default Restaurant