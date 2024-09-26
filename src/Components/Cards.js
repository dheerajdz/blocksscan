// import React from 'react';

// const Cards = () => {
//   return (
//     <>
//       {/* API Card */}
//       <div className="api-card-container">
//         <div className="api-card-header">
//           <span className="highlight-text">Robust API</span> Services
//         </div>

//         <div className="bar-chart">
//           <div className="bar" style={{ height: '30px' }}></div>
//           <div className="bar" style={{ height: '50px' }}></div>
//           <div className="bar" style={{ height: '70px' }}></div>
//           <div className="bar" style={{ height: '90px' }}></div>
//           <div className="bar" style={{ height: '70px' }}></div>
//           <div className="bar" style={{ height: '50px' }}></div>
//         </div>

//         <div className="api-response">
//           <pre>{`{
//   "status": 1,
//   "message": "OK",
//   "result": "14046 ... 0000"
// }`}</pre>
//         </div>

//         <div className="api-footer">
//           Access scalable, comprehensive and reliable APIs to enhance your blockchain experience.
//         </div>
//       </div>

//       {/* Search Engine Card */}
//       <div className="search-engine-container">
//         <div className="header">
//           <span className="highlight-text">Advanced Search</span> Engine
//         </div>

//         <div className="search-bar">
//           <input type="text" placeholder="0xEA3...E2AD2" />
//           <button>
//             <img
//               src="https://img.icons8.com/ios-filled/24/ffffff/search--v1.png"
//               alt="search-icon"
//             />
//           </button>
//         </div>

//         <div className="tab-menu">
//           <button className="tab active">Address</button>
//           <button className="tab">Blocks</button>
//           <button className="tab">Tokens</button>
//           <button className="tab">Apps</button>
//         </div>

//         <div className="search-result">
//           <div className="result-header">Address</div>
//           <div className="result-details">
//             <img
//               src="https://img.icons8.com/color/24/ethereum.png"
//               alt="ethereum-icon"
//             />
//             <span></span>
//           </div>
//         </div>

//         <div className="footer">
//           Quickly Locate key details like addresses, blocks, and NFTs across multiple chains.
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;


import React from 'react';


function Cards() {
  return (
    <section className="features-section">
      <div className="feature-card">
        <img src="Proof Of Work Cog.png" alt="Full-Featured Explorer" />
        <h3>Full-Featured Explorer</h3>
        <p>Access blockchain transactions, smart contracts, network analytics, and more—all in one place.</p>
      </div>

      <div className="feature-card">
        <img src="Group 132.png" alt="Robust API Services" />
        <h3>Robust API Services</h3>
        <p>Access scalable, comprehensive, and reliable APIs to enhance your blockchain experience.</p>
      </div>

      <div className="feature-card">
        <img src="verification.png" alt="Contract Interaction & Verification" />
        <h3>Contract Interaction & Verification</h3>
        <p>Utilize our tools for smart contract verification, reading, and writing with ease.</p>
      </div>


      <div className='frame'>
      <div className="feature-card">
        <img src="Frame 142.png" alt="Advanced Search Engine" />
        <h3>Advanced Search Engine</h3>
        <p>Quickly locate key details like addresses, blocks, and NFTs across multiple chains.</p>
      </div>

      <div className="feature-card">
        <img src="Group 146.png" alt="Multi Chain Data" className='group' />
        <h3>Multi Chain Data</h3>
        <p>Gain insights from data across multiple blockchains for a comprehensive view.</p>
      </div>
      </div>
    </section>
  );
}

export default Cards;

