import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3z4rfjd", "template_5ozsdns", form.current, {
        publicKey: "gCPlb3j9O3KWsCZRN",
      })
      .then(
        () => {
          toast.success("Email sent successfully")
        },
        (error) => {
          toast.error(error.message);
        }
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen p-5 pt-40 bg-cover text-white"
      style={{backgroundImage: 'url("contacts.png")'}}
    >
      <h2 className="text-4xl font-bold mb-5 max-sm:text-2xl text-center">
        Get in Touch With Me
      </h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="max-w-md mx-auto flex flex-col"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg text-gray-400 font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border bg-transparent border-gray-300 outline-none focus:border-2 focus:border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg text-gray-400 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md border bg-transparent border-gray-300 outline-none focus:border-2 focus:border-cyan-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg text-gray-400 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 rounded-md border bg-transparent border-gray-300 outline-none focus:border-2 focus:border-cyan-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-br from-purple-700 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-pink-700 hover:to-purple-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
