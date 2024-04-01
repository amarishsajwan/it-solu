import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">
            Have questions or need assistance? We're here to help!
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
