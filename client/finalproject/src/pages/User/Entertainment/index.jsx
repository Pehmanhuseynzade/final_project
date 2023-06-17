import React from 'react'
import "./entertainment.scss"
function Entertainment() {
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

            <div className='ent-sect-1'>
                <div className='text'>
                    <h2 className='h2'>Boulinq</h2>
                    <div className='line'></div>
                    <p className='p' >Boulinq Mərkəzi oyun, əyləncə və idmanı özündə birləşdirir. Çoxları üçün bu idman növü həyat tərzinə çevrilmişdir. Lakin əksəriyyət üçün boulinq bir ailə oyunudur. Boulinq mərkəzimiz maraqlı oyun və səmimi görüşlər üçün lazım olan hər şeyi özündə birləşdirir. Boş vaxtlarda bu məkan uşaqlar və böyüklər üçün ən maraqlı əyləncə yerlərindən biridir və hər bir ailənin tətilini daha da əyləncəli edir.</p>
                </div>
                <div className='image'>
                    <img className='img' src="https://www.marxalresort.az/assets/images/800x533-800x533.jpg" alt="bowling" />
                </div>
            </div>

            <div className='ent-sect-2'>
                <div className='image'>
                    <img className='img' src="https://www.marxalresort.az/assets/images/nuxa-945x590.jpg" alt="" />
                </div>
                <div className='text'>
                    <h2 className='h2'>Lazer Strayk</h2>
                    <div className='line'></div>
                    <p className='p'>Lazer Strayk sonsuz adrenalin mənbəyidir, çünki əyləncə üçün olsa belə "vurulmaq" hissi döyüşlərdə vurulan həqiqi döyüşçülərin duyğularını yaşamağa imkan verir, ancaq bu təkcə oyun deyil, həm də, dostlarla görüşmək, gözəl vaxt keçirmək və söhbət etmək üçün əla bir fürsətdir.</p>
                </div>
            </div>

            <div className='ent-images'>
                <div className='img-2'>
                    <img className='entimages' src='https://www.marxalresort.az/assets/images/eylence-8-698x463.jpeg' alt="entimage1" />
                    <img className='entimages' src='https://www.marxalresort.az/assets/images/eylence-2-800x533.jpg' alt="entimage2" />
                    <img className='entimages' src='https://www.marxalresort.az/assets/images/2-6-1275x850-800x533-800x533.jpg' alt="entimage3" />
                    <img className='entimages' src='https://www.marxalresort.az/assets/images/800x5334-1-800x533-800x533.jpg' alt="entimage4" />
                </div>
            </div>
        </>
    )
}

export default Entertainment