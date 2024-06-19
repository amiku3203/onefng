import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head'; // Import Head from next/head

const EnquiryModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.mobile) tempErrors.mobile = 'Mobile number is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Assuming the new page to redirect to is /thank-you
      router.push('/thank-you');
    }
  };

  return (
    <>
      <Head>
        <span className= 'text-black'>Enquire One FNG</span> {/* Set the title for the page */}
      </Head>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-4xl mx-4 sm:mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden">
          {/* Left Side - Image */}
          <div className="hidden md:block relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/background.jpg" // Update with your image path
              alt="Building"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-end">
              <button onClick={onClose} className="text-black text-2xl">
                &times;
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">ENQUIRE ONE FNG</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryModal;
