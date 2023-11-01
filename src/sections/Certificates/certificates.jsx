import React from 'react';
import img1 from '../../assets/My-Certificates/Certificate-1.png';
import img2 from '../../assets/My-Certificates/Certificate-2.jpeg';
import img3 from '../../assets/My-Certificates/Certificate-3.jpeg';
import img4 from '../../assets/My-Certificates/Certificate-4.jpeg';
import img5 from '../../assets/My-Certificates/Certificate-5.png';
import img6 from '../../assets/My-Certificates/Certificate-6.png';
import img7 from '../../assets/My-Certificates/Block-chain.png';
import Certificate from './certificate';
import './certificates.css';




export default function Certificates() {
    const data=[img2,img1,img4,img3,img5,img6,img7];
    // console.log(data);
  return (
    <>
     <center><h1 style={{fontWeight:"bold"}}className='sm:text-4xl text-xl  font-bold text-center'>Certified <span className='text-cyan-500'>Achievements</span><span className='text-3xl'>🏆</span>: A Testament to My Skills</h1></center>
    
    <div style={{border:"black solid 2px"}} className="portfolio__projects">
        
        {
            data.map(img => (
                
                <Certificate certificate={img} />
            ))
        }
    </div>
    
    
    </>


    
   
  )
}