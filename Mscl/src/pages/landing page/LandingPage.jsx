import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import MsclMain from "../../assets/Msclmain.png";
import { TbBulb } from "react-icons/tb";
import { GrLogin } from "react-icons/gr";
import { FiFile } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
const LandingPage = () => {
  const [language, setLanguage] = useState("en"); 
  const [activeLink, setActiveLink] = useState("");

  const translations = {
    en: {
      title: "Madurai Smart City",
      home: "Home",
      dashboard: "Dashboard",
      contactUs: "Contact Us",
      grievance: "Track Grievance",
      fileGrievance: "File a Grievance",
      officerLogin: "Officer Login",
      stepsTitle: "Simple steps to register your complaint",
      step1: {
        title: "Step 1",
        heading: "Login into Helpline portal",
        description:
          "Login into helpline portal using phone number. Enter the OTP to Login.",
      },
      step2: {
        title: "Step 2",
        heading: "Enter your Grievance",
        description:
          "Click on 'File a Grievance' and describe your grievance in the form.",
      },
      step3: {
        title: "Step 3",
        heading: "Submit the form",
        description:
          "Submit the form. You would receive an acknowledgement message with your unique grievance ID.",
      },
      step4: {
        title: "Step 4",
        heading: "Track your Grievance",
        description:
          "You will be send key updates. You may track your grievance yourself from the cm helpline portal",
      },
      quickLinks: "Quick Links",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      contactUs: "Contact us",
      aboutUs: "About us",
      rightsReserved: "All rights reserved © Madurai Smart City 2025",
    },
    ta: {
      title: "மதுரை ஸ்மார்ட் சிட்டி",
      home: "முகப்பு",
      dashboard: "டாஷ்போர்டு",
      contactUs: "தொடர்பு கொள்ளவும்",
      grievance: "புகார் நிலையை பின்தொடர்க",
      fileGrievance: "புகார் பதிவு செய்யவும்",
      officerLogin: "அதிகாரி உள்நுழைவு",
      stepsTitle: "உங்கள் புகாரை பதிவு செய்ய எளிய வழிமுறைகள்",
      step1: {
        title: "நடைமுறை 1",
        heading: "உதவி மைய தளத்தில் உள்நுழையவும்",
        description:
          "உதவி மைய தளத்தில் உங்கள் தொலைபேசி எண்ணை பயன்படுத்தி உள்நுழையவும். OTPஐ உள்ளிடவும்.",
      },
      step2: {
        title: "நடைமுறை 2",
        heading: "உங்கள் புகாரை உள்ளிடவும்",
        description:
          "'புகார் பதிவு செய்யவும்' கிளிக் செய்து உங்கள் புகாரை விவரிக்கவும்.",
      },
      step3: {
        title: "நடைமுறை 3",
        heading: "படிவத்தை சமர்ப்பிக்கவும்",
        description:
          "படிவத்தை சமர்ப்பிக்கவும். உங்கள் தனிப்பட்ட புகார் ஐடியுடன் உறுதிப்படுத்தல் செய்தி கிடைக்கும்.",
      },
      step4: {
        title: "நடைமுறை 4",
        heading: "உங்கள் புகாரை பின்தொடர்க",
        description:
          "அறிக்கைகள் கிடைக்கும். உங்களுக்கு தானாகவே புகாரை பின்தொடர முடியும்.",
      },

      quickLinks: "விரைவான இணைப்புகள்",
      terms: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
      privacy: "தனியுரிமைக் கொள்கை",
      contactUs: "தொடர்பு கொள்ளவும்",
      aboutUs: "எங்களை பற்றி",
      rightsReserved:
        "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை © மதுரை ஸ்மார்ட் சிட்டி 2025",
    },
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); 
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <>
      <div className="container mx-auto px-6 font-roboto ">
        <header className="fixed top-0 left-0 z-10 w-full bg-white bg-opacity-80 mx-4 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Madurai city" className="size-10" />
              <h1 className="text-[#21409A] font-medium text-lg my-4">
                {translations[language].title}
              </h1>
            </div>
            <nav className="flex gap-4 font-normal text-lg items-center">
          <a
            href=""
            onClick={() => handleLinkClick("")}
            className={`px-5 py-2 rounded-md ${
              activeLink === "" ? "text-white bg-[#21409A]" : "text-black"
            }`}
          >
            {translations[language].home}
          </a>
          <a
            href="/dashboard"
            onClick={() => handleLinkClick("/dashboard")}
            className={`px-3 py-2 rounded-lg ${
              activeLink === "/dashboard" ? "text-white bg-[#21409A]" : "text-black"
            }`}
          >
            {translations[language].dashboard}
          </a>
          <a
            href="/contactus"
            onClick={() => handleLinkClick("/contactus")}
            className={`px-3 py-2 rounded-lg ${
              activeLink === "/contactus" ? "text-white bg-[#21409A]" : "text-black"
            }`}
          >
            {translations[language].contactUs}
          </a>
              <div className="flex items-center gap-2">
                <BsGlobe />
                <select
                  onChange={handleLanguageChange}
                  value={language}
                  className="px-2 py-1 rounded-lg font-medium"
                >
                  <option value="en">ENG</option>
                  <option value="ta">தமிழ்</option>
                </select>
              </div>
            </nav>
          </div>
        </header>

        <main className="pt-16 space-y-20">
          <section className="relative ">
            <div>
              <img
                src={MsclMain}
                alt="Madurai city"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-6 bg-white p-6 w-4/5 rounded-xl shadow-md">
                <button className="px-8 py-8 flex flex-col items-center justify-center gap-2 bg-[#E6D590] rounded-lg">
                  <div className="bg-[#21409A] rounded-full px-4 py-4 ">
                <TbBulb 
                    className="size-6 text-[#E6D590]"
                  />
                  </div>
                  <p>{translations[language].grievance}</p>
                </button>
                <button className="px-8 py-8 flex flex-col items-center justify-center gap-2 bg-[#E6D590] rounded-lg">
                <div className="bg-[#21409A] rounded-full px-4 py-4 ">
                <GrLogin 
                    className="size-6 text-[#E6D590] "
                  />
                  </div>
                  <p>{translations[language].fileGrievance}</p>
                </button>
                <button className="px-8 py-8 flex flex-col items-center justify-center gap-2 bg-[#E6D590] rounded-lg">
                <div className="bg-[#21409A] rounded-full px-4 py-4 ">
                < FiFile
                    className="size-6 text-[#E6D590]"
                  />
                  </div>
                  <p>{translations[language].officerLogin}</p>
                </button>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-bold text-2xl mb-8">
              {translations[language].stepsTitle}
            </h2>
            <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto">
              {[1, 2, 4, 3].map((step) => (
                <div
                  className="flex justify-center items-center p-6 bg-[#FFF5CE] rounded-lg"
                  key={step}
                >
                  <div className="bg-white shadow-md px-8 py-10 text-center w-full space-y-2">
                    <h3 className="font-bold text-xl text-[#21409A]">
                      {translations[language][`step${step}`].title}
                    </h3>
                    <h1 className="font-semibold text-lg">
                      {translations[language][`step${step}`].heading}
                    </h1>
                    <p className="text-[#575757] font-normal text-sm">
                      {translations[language][`step${step}`].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer className="mt-12 text-white bg-[#21409A] font-roboto">
        <div className="mx-8 py-6 space-y-4">
          <p className="font-medium text-xl">
            {translations[language].quickLinks}
          </p>
          <nav className="flex justify-between font-normal text-sm text-[#D9D9D9] py-4">
            <a href="/terms">{translations[language].terms}</a>
            <a href="/privacy">{translations[language].privacy}</a>
            <a href="/contactus">{translations[language].contactUs}</a>
            <a href="/aboutus">{translations[language].aboutUs}</a>
          </nav>
          <hr className="border-[#8C8C8C] border-0.5 mr-20" />
          <p className="text-[#8B8B8B] py-3 text-sm font-normal">
            {translations[language].rightsReserved}
          </p>
        </div>
      </footer>
      ;
    
    </>
  );
};

export default LandingPage;
