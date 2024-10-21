// src/app/contact/page.tsx

import Image from "next/image";
import Navbar from "../Navbar/page";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-center">
          <Navbar/>
        <Image src="/profile3.jpg" alt="Profile Picture" width={130} height={150} className="rounded-full mx-auto" />
        </header>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center py-10">Contact Me</h1>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg">Name:</label>
              <input type="text" id="name" className="border border-gray-300 p-2 w-full"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">Email:</label>
              <input type="email" id="email" className="border border-gray-300 p-2 w-full"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg">Message:</label>
              <textarea id="message" className="border border-gray-300 p-2 w-full" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
          </form>
          
          <div className="mt-10 text-center">
            <p>If you have any questions, feel free to reach out!</p>
            <p>Email: rabi.hassan@example.com</p>
            <p>Phone: +92 300 000 0000</p>
          </div>
        </div>
    </div>
  );
};

export default Contact;