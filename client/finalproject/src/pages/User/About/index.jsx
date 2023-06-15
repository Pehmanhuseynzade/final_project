import React from 'react'
import "./about.scss"
function About() {
  return (
    <>

      <div className='about-page'>
        <div>
          <h1>İstirahət Kompleksimizə xoş gəlmişsiniz</h1>
          <div className='line'></div>
          <p>
            Azərbaycanın ən yaxşı otellərindən biri Marxal Resort & Spa doğma ev füsunkarlığı ilə 5 ulduzlu məkanın lüksu və rahatlığını özündə birləşdirir. İçəri addımladığınız ilk andan etibarən bura Sizi özü ilə uzaqlara aparır. Geniş qarşılama ərazisi Sizə xoş salamlama, sakitləşdirici və möhtəşəm mühit təqdim edir. Bu mehmanxana qüsursuz qonaqsevərliyi ilə Sizə istirahətiniz boyunca öz evinizdə olduğunuz kimi əziz qonaq hissini verəcək.
          </p>

          <p className='content-2'>
          Marxal Resort & Spa Kompleksi Şəkinin dağlarla əhatə olunmuş sirli guşəsində, dəniz səviyyəsindən 1080 m. yüksəklikdə yerləşir. Otelin coğrafi mövqeyi onu təkrarolunmaz və xüsusi edir. Mehmanxana Şəki Şəhər mərkəzindən 6 km., Şəki Dəmiryol Vağzalından 14 km., Qəbələ Hava limanından 105 km, Bakı Beynəlxalq Hava limanından 324 km. məsafədə yerləşir. Şəki Azərbaycanın ən qədim şəhərlərindən biri və abidələr qoruğudur.
          </p>

          <p>* * * * *</p>
        </div>

        <div className='about-image'>
          <img src="https://www.marxalresort.az/assets/images/2m8a0676-1264x842.jpg" alt="aboutimage" />
        </div>
      </div>
    </>
  )
}

export default About