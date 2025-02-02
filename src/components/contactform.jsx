import React from "react";
import { Link } from "react-router";


const ContactForm = () => {
    return (
      <div className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded-md"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded-md"/>
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded-md"></textarea>
         
           <Link to={"#navbar"}>
            <button className="px-6 py-3 bg-blue-600 rounded-lg">Send Message</button>
            </Link>           
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  