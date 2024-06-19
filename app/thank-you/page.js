// components/ThankYou.js or pages/thank-you.js
import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-teal-900 text-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-4">Your enquiry has been submitted successfully. We will get back to you shortly.</p>
        <Link href="/" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
           
            Go Back to Home
          
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
