import React ,{useRef} from 'react'
import "./contact.css";
import walmart from "../../assets/walmart.png"
import adobe from "../../assets/adobe.png"
import microsoft from "../../assets/microsoft.png"
import facebook from "../../assets/facebook.png"
import facebookicon from "../../assets/facebook-icon.png"
import twittericon from "../../assets/twitter.png"
import youtubeicon from "../../assets/youtube.png"
import instagramicon from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qy696ee', 'template_v83aimv', form.current, 'ZiQ6mCSkKLcPl4ZI3RqJw')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert ("email sent");
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <section id="contactpage">
        <div id="clients">
            <h1 className='contactpagetitle'>My Clients</h1>
            <p className='clientdescription'> I have had the oppurtunity to work with a diverse group of companies.
            some of the notabl ecompanies I have worked with includes</p>
        
            <div className='clientimgs'>
                <img src={walmart} alt="clinet"  className='clientimg'/>
                <img src={adobe} alt="clinet"  className='clientimg'/>
                <img src={microsoft} alt="clinet"  className='clientimg'/>
                <img src={facebook} alt="clinet"  className='clientimg'/>

            </div>
        </div>
        <div id="contact">
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className='contactdescription'>Please fill out the form below to discuss any work oppurtunities</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="your_name"/>
                <input type="email" className='email' placeholder='Your Email' name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="send" className='submitbtn'>submit</button>
                {/* <button type="submit" value="send" className='submitbtn' onClick={sendEmail}>submit</button> */}
                <div className='links'>
                    <img src={facebookicon} alt="facebook" className='link'/>
                    <img src={twittericon} alt="twitter" className='link'/>
                    <img src={instagramicon} alt="instagram" className='link'/>
                    <img src={youtubeicon} alt="youtube" className='link'/>
                </div>
            </form>

        </div>
      
    </section>
  )
}

export default Contact
