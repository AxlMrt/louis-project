import React from "react";
import ContactMeForm from "./ContactMeForm";

export default function ContactMeCard() {
  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
        <h1 className="text-lg font-medium text-gray-700">
          Que souhaitez-vous me dire ?
        </h1>

        <ContactMeForm />
      </div>
    </div>
  );
}
