import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <span className='text-bold font-mono bg-yellow-400 text-xl'>OnE PaGe </span>
          <p className="mt-4">A real estate group that is committed to building a better future based on principles of clarity, trust, and integrity.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-center md:text-left">
          <div>
            <h3 className="font-bold">SITE OFFICE</h3>
            <p>PLOT NO. 1, SECTOR 142, NOIDA - 201305</p>
            <p>UTTAR PRADESH, INDIA</p>
          </div>
          <div>
            <h3 className="font-bold">MARKETING OFFICE</h3>
            <p>PLOT NO-7, TECHZONE 4, GREATER NOIDA WEST, 201308</p>
            <p>UTTAR PRADESH, INDIA</p>
          </div>
          <div>
            <h3 className="font-bold">REGISTERED OFFICE</h3>
            <p>PLOT NO. 3 & 4, 2ND FLOOR, A BLOCK MARKET,</p>
            <p>SAVITRI BHAWAN, PREET VIHAR, DELHI - 110092 INDIA</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="flex justify-center mt-8">
        <img src="/qrcode.svg" alt="QR Code" className="h-24" />
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>Collection A/C Details: Cheque/Draft In Favor Of “SS Technopark Pvt Ltd Collection Account for ONE FNG”</p>
        <p>Account No. 629305042272, IFSC: ICIC0006293, ICICI Bank Limited, Branch: Rajouri Garden, Delhi.</p>
        <p>© Copyright One FNG. All Right Reserved. | RERA Registration No. – UPRERAPRJ279516 <a href="https://up-rera.in/projects" className="text-orange-600">https://up-rera.in/projects</a> | <a href="#" className="text-orange-600">Disclaimer & Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
