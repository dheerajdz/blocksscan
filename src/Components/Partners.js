
// import React from 'react';

// const App = () => {
//   const partners = [
//     { name: 'XinFin', logo: 'Mask group.png' },
//     { name: 'XDC Foundation', logo: 'xdcfoundation 1.png' },
//     { name: 'XDSea', logo: 'xdsea 1.png' },
//     { name: 'StorX', logo: 'storx 1.png' },
//     { name: 'Plu', logo: 'plugin 1.png' },
//   ];

//   return (
//     <div className="app">
//       {/* Partners Section */}
//       <section className="partners-section">
//         <h2>Our Partners</h2>
//         <h1>Ecosystem Partners</h1>
//         <p>
//           In the world of partnerships, an ecosystem is a network of partners a business creates <br />
//           and nurtures to create new market opportunities.
//         </p>
//         <div className="partners-grid">
//           {partners.map((partner) => (
//             <div key={partner.name} className="partner-card">
//               <img src={partner.logo} alt={partner.name} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Trial Section */}
//       <section className="trial-section">
//         <div>
//           <p>Interested in our Tool?</p>
//           <h3>
//             Feel Free To Join <br /> Our 30 Days Free Trial
//           </h3>
//            </div>
//            <div>
//            <img src="globe.svg" alt="Globe representing global reach" />
//            </div>
//       </section>
      
      
//     </div>
//   );
// };

// export default App;

import React from 'react';


const App = () => {
  const partners = [
    { name: 'XinFin', logo: 'Mask group.png' },
    { name: 'XDC Foundation', logo: 'xdcfoundation 1.png' },
    { name: 'XDSea', logo: 'xdsea 1.png' },
    { name: 'StorX', logo: 'storx 1.png' },
    { name: 'Plu', logo: 'plugin 1.png' },
  ];

  return (
    <div className="app">
      {/* Partners Section */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <h1>Ecosystem Partners</h1>
        <p>
          In the world of partnerships, an ecosystem is a network of partners a business creates <br />
          and nurtures to create new market opportunities.
        </p>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-card">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Trial Section */}
      <section className="trial-section">
        <div>
          <p>Interested in our Tool?</p>
          <h3>
            Feel Free To Join <br /> Our 30 Days Free Trial
          </h3>
          <button className="new-button">
            Schedule a call
          </button>
        </div>
        <div>
          <img src="globe.svg" alt="Globe representing global reach" />
        </div>
      </section>
    </div>
  );
};

export default App;