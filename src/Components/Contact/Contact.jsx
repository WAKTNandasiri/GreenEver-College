import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "56519b58-4c0c-41a8-921f-caab2cf34f99");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p>Have questions about GreenEver? We're here to help! Reach out to us for information on programs, campus life, or admissions.</p>
        <ul>
            <li><img src={mail_icon} alt="" />contactgreenever@gmail.com</li>
            <li><img src={phone_icon} alt="" />+94 77-234-6785</li>
            <li><img src={location_icon} alt="" />45 Massachustts Ave, Cambridge <br/> MA 02345, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>write your message here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
