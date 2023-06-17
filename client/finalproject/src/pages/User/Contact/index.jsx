import React from 'react'
import "./contact.scss"
function Contact() {
  return (
    <>
    <div className='main-sec-contact'>
      <img className='contact-main-image' src="https://www.marxalresort.az/assets/images/contact-1500x614.jpeg" alt="restaurant" />
      <form>
      <div className='name-sur'>
      <label htmlFor="name">Adınız:</label>
      <input type='text' name='name' id='name' className='name' />
      <label htmlFor="sur">Soyad:</label>
      <input type='text' name='surname' id='sur' className='sur' />
      </div>


      <div className='mail-num'>
      <label htmlFor="email">E-mail:</label>
      <input type='email' name='email' id='email' className='email' />
      <label htmlFor="phone">Mobil:</label>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" className='phone' />
      </div>
      <div className='text-mes'>
      <label htmlFor="message">Mesaj:</label>
      <textarea className='message' type='message' id='message' name="message"></textarea>
      </div>
      <button type='submit' className='form-btn'>Göndər</button>
      </form>
      </div>
    </>
  )
}

export default Contact