
import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettà muse.</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h5>mettà muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h5>Contact Us</h5>
          <p>+44 221 133 5030</p>
          <p>customercare@mettamuse.com</p>

          <h5>Currency</h5>
          <p>USD $</p>
        </div>

        <div>
          <h5>Follow Us</h5>
          <p>[Instagram] [Facebook]</p> {/* You can replace with icons later */}
          <h5>We Accept</h5>
          <p>[GPay] [MasterCard] [Visa] [Amex] [ApplePay]</p> {/* Payment icons placeholders */}
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 mettà muse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

