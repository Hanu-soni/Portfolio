// import React from "react";
// import "./skill.css";
// import data from "./data";
// import Typewriter from "typewriter-effect";
// const Myskill = () => {

//     let arritems=[];
//     arritems=data.map((item)=>{
//         return item.title;
//     })
//   const Typewrittereffect = () => {
 
    
//     return (
//       <Typewriter
//         options={{
//           strings: arritems,
//           autoStart: true,
//           loop: true,
//         }}
//       />
//     );
//   };
//   return (
//     <section  style={{padding:"5px"}} id="skill" data-aos="zoom-in">
//       <h2 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>My KeySkills</h2>
//       <p style={{ color: "black", fontWeight: "bold" }}>
//         {" "}
//         {Typewrittereffect()}
//       </p>
//       <div className="container contact__container">
//         {data.map((title) => (
//           <div className="flip-container shadow" key={title.id}>
//             <img
//               style={{
//                 boxShadow: "2px 2px 12px 5px black",
//                 borderRadius: "8px",
//               }}
//               src={title.Image}
//               alt={title.title}
//             />
//             <div className="back">{title.title}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Myskill;
