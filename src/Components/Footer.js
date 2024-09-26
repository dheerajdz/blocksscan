// import React from 'react';


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//             <di
//             <img src='Vector 1.png' alt='footer' />
//           <h2>Open<span>Scan</span></h2>
//           <p>Explore blockchain data with unparalleled<br/> speed and accuracy.</p>
//           <p>Blocksscan Technologies Pvt Ltd.</p>
//           <p>Office No.207, Redbricks Business Plaza,<br/> Global City, Virar West, Mumbai 401303</p>
//         </div>
//         <div className="footer-section">
//           <h3>Useful Links</h3>
//           <ul>
//             <li><a href="content">Content</a></li>
//             <li><a href="how-it-works">How it Works</a></li>
//             <li><a href="create">Create</a></li>
//             <li><a href="explore">Explore</a></li>
//             <li><a href="terms">Terms & Services</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Community</h3>
//           <ul>
//             <li><a href="/help-center">Help Center</a></li>
//             <li><a href="/partners">Partners</a></li>
//             <li><a href="/suggestions">Suggestions</a></li>
//             <li><a href="/blog">Blog</a></li>
//             <li><a href="/newsletters">Newsletters</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Our Emails</h3>
//           <p><a href="mailto:sales@blocksscan.io">sales@blocksscan.io</a></p>
//           <p><a href="mailto:support@blocksscan.io">support@blocksscan.io</a></p>
//           <p><a href="mailto:social@blocksscan.io">social@blocksscan.io</a></p>
//         </div>
//       </div>
//       <div className="footer-social">
//         <a href="https://instagram.com">instagram</a>
//         <a href="https://facebook.com">facebook</a>
//         <a href="https://twitter.com">twitter</a>
//         <a href="https://linkedin.com">linkedin</a>
//       </div>
//       <div className="footer-bottom">
//         <p>Copyright 2022 BlockScan. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="brand-logo">
            <img src='Vector 1.png' alt='footer logo' />
            <h2>Open<span>Scan</span></h2>
          </div>
          <p className='para'>Explore blockchain data with unparalleled<br /> speed and accuracy.</p>
          <p>Blocksscan Technologies Pvt Ltd.</p>
          <p>Office No.207, Redbricks Business Plaza,<br /> Global City, Virar West, Mumbai 401303</p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="content">Content</a></li>
            <li><a href="how-it-works">How it Works</a></li>
            <li><a href="create">Create</a></li>
            <li><a href="explore">Explore</a></li>
            <li><a href="terms">Terms & Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/suggestions">Suggestions</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/newsletters">Newsletters</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Emails</h3>
          <p><a href="mailto:sales@blocksscan.io">sales@blocksscan.io</a></p>
          <p><a href="mailto:support@blocksscan.io">support@blocksscan.io</a></p>
          <p><a href="mailto:social@blocksscan.io">social@blocksscan.io</a></p>
        </div>
      </div>
      <div className='Line'>
        <img src='Line 16.png' alt='line'/>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2022 BlockScan. All Rights Reserved</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      
      </div>
    </footer>
  );
}

export default Footer;