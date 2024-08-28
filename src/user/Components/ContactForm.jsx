import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-8 px-4">
      {/* Left Column - Contact Information */}
      <div className="w-full md:w-1/3 space-y-4">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <span className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.75 1.5a2.25 2.25 0 100 4.5h.533a2.25 2.25 0 012.119 1.478l.66 1.924a7.5 7.5 0 004.75 4.75l1.924.66a2.25 2.25 0 011.478 2.119v.533a2.25 2.25 0 104.5 0v-1.567a2.25 2.25 0 00-2.25-2.25h-.533a2.25 2.25 0 01-2.119-1.478l-.66-1.924a7.5 7.5 0 00-4.75-4.75L7.28 5.847a2.25 2.25 0 01-1.478-2.119V2.25a2.25 2.25 0 00-2.25-2.25H3.75z" clipRule="evenodd" />
              </svg>
            </span>
            <p className="text-lg font-semibold">Call To Us</p>
          </div>
          <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-sm text-gray-600">Phone: +8801911112222</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <span className="text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm5 0a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1H7z" clipRule="evenodd" />
              </svg>
            </span>
            <p className="text-lg font-semibold">Write To Us</p>
          </div>
          <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-sm text-gray-600">Email: customer@example.com</p>
          <p className="text-sm text-gray-600">Email: support@example.com</p>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="w-full md:w-2/3">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="tel" placeholder="Your Phone" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
          <button type="submit" className="w-full md:w-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
