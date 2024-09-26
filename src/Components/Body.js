// import React from 'react';


// function Body() {
//   return (
//     <nav className="navbar">
//     <div className="navbar-logo">
//       {/* Replace with the actual image or SVG */}
//       <img src="logo.png" alt="OpenScan Logo" />
    
//     </div>

//     <ul className="navbar-menu">
//       <li><a href="#products">Products</a></li>
//       <li><a href="#services">Services</a></li>
//       <li><a href="#blockrpc">BlockRpc</a></li>
//       <li><a href="#industries">Industries</a></li>
//     </ul>

//     <div className="navbar-button">
//       <button>Book a Demo</button>
//     </div>
//   </nav>
//     <div className="body-wrapper">
//       <div className="content-container">
//         <div className="text-section">
//           <h1 className='headline'>
//             Unleash the Power<br />
//             <span className="highlight">of AI & Web3</span> with<br />
//             OpenScan Explorer
//           </h1> 

//           <div className="info-section">
//             <p className='paragraph'>
//               Explore smarter with OpenScan Explorer. Our AI-driven,<br />
//               EVM-compatible tool gives you clear, real-time insights.<br />
//               Discover more with ease and precision
//             </p>
//             <button className='read-more-button'>Read One Pager</button>
//           </div>
//         </div>

//         <div className="sphere-container">
//           <img src="sphere1.svg" alt="sphere1" className="sphere1" />
//         </div>
//       </div>
//     </div>

//   );
// }

// export default Body;
// import React from 'react';

// function Body() {
//   return (
//     <>
//       <section className='Lines'>
//         {/* Navbar Section */}
//         <section className="navbar">
//           <div className="navbar-logo">
//             {/* Replace with the actual image or SVG */}
//             <img src="logo.png" alt="OpenScan Logo" />
//           </div>

//           <ul className="navbar-menu">
//             <li><a href="#products">Products</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#blockrpc">BlockRpc</a></li>
//             <li><a href="#industries">Industries</a></li>
//           </ul>

//           <div className="navbar-button">
//             <button>Book a Demo</button>
//           </div>
//         </section>
      

//         {/* Body Wrapper */}
//         <div className="body-wrapper">
//           <div className="content-container">


//             {/* Headline and Text Section */}
//             <div className="text-section">
//             <div className="custom-button">
//               <div className="icon-container">
//                 <img src="blockchain.png" alt="Icon" />
//               </div>
//               <span>Explore, Analyze, Innovate</span>
//             </div>
//               <h1 className="headline">
//                 Unleash the Power<br />
//                 <span className="highlight">of AI & Web3</span> with<br />
//                 OpenScan Explorer
//               </h1>

//               <div className="info-section">
//                 <p className="paragraph">
//                   Explore smarter with OpenScan Explorer. Our AI-driven,<br />
//                   EVM-compatible tool gives you clear, real-time insights.<br />
//                   Discover more with ease and precision.
//                 </p>
//                 <button className="read-more-button">Read One Pager</button>
//               </div>
//             </div>

//             {/* Sphere Section */}
//             <div className="sphere-container">
//               <img src="sphere1.svg" alt="sphere1" className="sphere1" />
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="stats-container">
//         <div className="stat-item">
//         <span class="stat-number">1.75M+</span>
//         <span class="stat-label">USER ACTIVE</span>
//         </div>
//         <div class="divider">
//         </div>
//         <div class="stat-item">
//         <span class="stat-number">230+</span>
//         <span class="stat-label">TRUSTED BY COMPANY</span>
//         <div class="divider">
//         </div>
//         <div class="stat-item">
//         <span class="stat-number">297M+</span>
//         <span class="stat-label">TRANSACTIONS</span>
//         </div>
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default Body;
import React from 'react';

function Body() {
  return (
    <>
      <section className="Lines">
        {/* Navbar Section */}
        <section className="navbar">
          <div className="navbar-logo">
            {/* Replace with the actual image or SVG */}
            <img src="logo.png" alt="OpenScan Logo" />
          </div>

          <ul className="navbar-menu">
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blockrpc">BlockRpc</a></li>
            <li><a href="#industries">Industries</a></li>
          </ul>

          <div className="navbar-button">
            <button>Book a Demo</button>
          </div>
        </section>

        {/* Body Wrapper */}
        <div className="body-wrapper">
          <div className="content-container">
            {/* Headline and Text Section */}
            <div className="text-section">
              <div className="custom-button">
                <div className="icon-container">
                  <img src="blockchain.png" alt="Icon" />
                </div>
                <span>Explore, Analyze, Innovate</span>
              </div>

              <h1 className="headline">
                Unleash the Power<br />
                <span className="highlight">of AI & Web3</span> with<br />
                OpenScan Explorer
              </h1>

              <div className="info-section">
                <p className="paragraph">
                  Explore smarter with OpenScan Explorer. Our AI-driven,<br />
                  EVM-compatible tool gives you clear, real-time insights.<br />
                  Discover more with ease and precision.
                </p>
                <button className="read-more-button">Read One Pager</button>
              </div>
            </div>

            {/* Sphere Section */}
            <div className="sphere-container">
              <img src="sphere1.svg" alt="sphere1" className="sphere1" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">1.75M+ USER ACTIVE</span>
          {/* <span className="stat-label">USER ACTIVE</span> */}
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <span className="stat-number">230+ TRUSTED BY COMPANY</span>
          {/* <span className="stat-label">TRUSTED BY COMPANY</span> */}
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <span className="stat-number">297M+ TRANSACTIONS</span>
          {/* <span className="stat-label">TRANSACTIONS</span> */}
        </div>
      </div>
    </>
  );
}

export default Body;
