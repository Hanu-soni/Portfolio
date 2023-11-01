import React,{useRef} from 'react';
import emailjs from "@emailjs/browser"
import './footer.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_uj9xt56', 'template_hu762at', form.current, 'cTpZTtx0ub08Tv-9-')
      .then((result) => {
        document.getElementById('text1').value="";
    document.getElementById('text2').value="";
    document.getElementById('text3').value="";
          toast.success('message sent',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
        toast.error('something went Wrong', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0.1,
          theme: "dark",
          });
      });
  };

  return (
    <section id="footer">
      <h5 >Lets Connect and Change the World!</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5 className="contact__h5">pankajsoni93444@gmail.com</h5>

            <a href='mailto:sakshamagrawal18@gmail.com' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            

            <a href='https://api.whatsapp.com/send?phone+917023797883' rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input id='text1' type="text" name='user_name' placeholder='Your Full Name' required />
          <input id='text2' type="email" name='user_email' placeholder='Your Email' required />
 <textarea id='text3' name='message' rows='7' placeholder='Your Message' required />
 <button type='submit' value="send" className='btn btn-primary'>Send Message</button>
 <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>
        </form>
      </div>
    </section>
  )
}

export default Footer