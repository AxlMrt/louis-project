"use client";
import React from "react";
import ContactSocialLinks from "../../components/Contact-Me/ContactSocialLinks";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
import Image from "next/image";
import PageRedirection from "@/components/PageRedirection/PageRedirection";
import ContactMeTitle from "@/components/Contact-Me/ContactMeTitle";
import ContactMeCard from "@/components/Contact-Me/card/ContactMeCard";
import contactPhoto from "@/images/contact-me.jpg";

export default function ContactMe() {
  return (
    <section>
      <div className="container px-6 py-12 mx-auto">
        <PageRedirection title={"Accueil"} link={"/home"} />
        <ContactMeTitle />

        <div className="mt-6 flex items-center justify-center h-80 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            preload="auto"
            autoPlay
          >
            <source
              src="https://youtu.be/qgpYkN7uFuA?si=8sUKs84vV0Hly7tu"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-center text-2xl font-semibold text-gray-800 capitalize lg:text-left lg:text-3xl">
              Informations
              <br />
              Supplémentaires
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <SlLocationPin size={25} className="mx-2" />

                <span className="mx-2 text-gray-700 truncate w-72 capitalize">
                  29940, la foret fouesnant
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <MdMailOutline size={25} className="mx-2" />

                <span className="mx-2 text-gray-700 truncate w-72">
                  objectif.grand.large@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 ">
                <u>Me suivre</u>
              </h3>

              <ContactSocialLinks />
            </div>
          </div>

          <ContactMeCard />
        </div>
      </div>
    </section>
  );
}
