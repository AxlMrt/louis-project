import ContactMeFormData from "@/types/ContactMeFormType";
import React, { useState } from "react";
import { sendEmail } from "./SendMail";

export default function ContactMeForm() {
  const [formData, setFormData] = useState<ContactMeFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="flex-1">
        <label className="block mb-2 text-sm text-gray-600">Votre nom</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="flex-1 mt-6">
        <label className="block mb-2 text-sm text-gray-600">
          Adresse email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="johndoe@example.com"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="w-full mt-6">
        <label className="block mb-2 text-sm text-gray-600">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Envoyer
      </button>
    </form>
  );
}
