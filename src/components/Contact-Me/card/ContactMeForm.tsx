"use client";

import React, { useState } from "react";
import { sendEmail } from "./send-mail";
import ContactMeFormData from "@/types/ContactMeFormType";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMeForm() {
  const [formData, setFormData] = useState<ContactMeFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: false, email: false, message: false };

    if (!formData.name.trim()) {
      newErrors.name = true;
      toast.error("Le nom est requis");
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      toast.error("L'email est requis");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
      toast.error("Veuillez entrer une adresse email valide");
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      toast.error("Le message est requis");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await sendEmail(formData);
      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: false, email: false, message: false });
    } catch (error) {
      toast.error(`Une erreur est survenue: ${error}`);
    }
  };

  return (
    <>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex-1">
          <label className="block mb-2 text-sm text-gray-600">Votre nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
              errors.name ? "border-red-500" : "border-gray-200"
            } rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
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
            className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
          />
        </div>

        <div className="w-full mt-6">
          <label className="block mb-2 text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
              errors.message ? "border-red-500" : "border-gray-200"
            } rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Envoyer
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
}
