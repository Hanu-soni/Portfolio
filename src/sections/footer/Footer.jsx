import { FaPhone } from 'react-icons/fa'
import {links, socials} from './data'
import './footer.css';
import Image5 from '../../assets/Video1.mp4' ;
import '../../index.css';

const Footer = () => {
  return (
  
    <footer className='bg-dark text-primary py-5'>
    <div className='container'>
        <div className="d-flex justify-content-center container-fluid">
        <video className='video' controls>
        <source src={Image5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className='text-center mb-4'>
            <h2 className='fs-2' style={{color:"blue"}}>ENDING</h2>
        </div>
        <div className='text-center fs-6 fw-bolder'>
            <p>
                Thank you for visiting my portfolio! I'm passionate about creating unique and engaging digital experiences. Whether it's web development, design, or any other creative project, I'm always eager to take on new challenges. If you'd like to collaborate, have any questions, or simply want to say hello, please feel free to reach out. Let's connect and bring your ideas to life. Together, we can make the digital world a more vibrant and user-friendly place. Cheers to creativity and innovation!
            </p>
        </div>
        <div className='mt-4 text-center fs-5 fw-bolder'>
            <p> +91 9957711685 &nbsp; <FaPhone /></p>
            <p>Email: pankajsoni93444@gmail.com</p>
        </div>
    </div>
</footer>


     
  )
}

export default Footer