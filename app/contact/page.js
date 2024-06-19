 "use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: 'India',
    mobile: '',
    contactMethod: 'phone',
    newsOffers: false,
    agreePolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
    router.push("/thank-you");
  };

  return (
    <div className="flex flex-col font-serif items-center px-4 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">REGISTER YOUR INTEREST</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="country">Country*</label>
            <select
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              required
            >
              <option value="India">India</option>
              {/* Add other country options here */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="mobile">Mobile Number*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-700">Preferred Contact Method</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={form.contactMethod === 'phone'}
                onChange={handleChange}
                className="form-radio text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2">Phone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={form.contactMethod === 'email'}
                onChange={handleChange}
                className="form-radio text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2">Email</span>
            </label>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="newsOffers"
            name="newsOffers"
            checked={form.newsOffers}
            onChange={handleChange}
            className="form-checkbox text-orange-500 focus:ring-orange-500 mr-2"
          />
          <label htmlFor="newsOffers" className="text-sm font-medium text-gray-700">I'd like to hear about news & offers.</label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agreePolicy"
            name="agreePolicy"
            checked={form.agreePolicy}
            onChange={handleChange}
            className="form-checkbox text-orange-500 focus:ring-orange-500 mr-2"
            required
          />
          <label htmlFor="agreePolicy" className="text-sm font-medium text-gray-700">I've read and agree to the Privacy Policy*</label>
        </div>
        <div className="mb-4">
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>
        <div>
          <button type="submit" className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
