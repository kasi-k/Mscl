import React from "react";
import Logo from "../../assets/logo.png";
import MsclMain from "../../assets/Msclmain.png";
import Bulb from "../../assets/iconbulb.png";
import Login from "../../assets/iconlogin.png";
import OfficerLogin from "../../assets/officerlogin.png";
const LandingPage = () => {
  return (
    <div className="mx-6 font-roboto">
      <header className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Madurai city" className="size-10" />
            <h1 className="text-[#21409A] font-medium text-lg my-4">
              Madurai Smart City
            </h1>
          </div>
          <nav className="flex gap-4 font-normal">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact-us">Contact us</a>
          </nav>
        </div>
      </header>

      <main className="space-y-20">
        <section className="relative z-0">
          <div>
            <img src={MsclMain} alt="Madurai city" className="w-full h-auto" />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex  justify-evenly bg-white p-4 w-3/4 rounded-xl shadow-md">
              <button className="px-16 py-6 flex flex-col items-center justify-center gap-2  bg-[#E6D590] rounded-lg">
                <img
                  src={Bulb}
                  alt="Bulb Image"
                  className="bg-[#21409A] rounded-full px-2 py-2 size-8"
                />
                <p> Track Grievance</p>
              </button>
              <button className="px-16 flex flex-col items-center justify-center gap-2 bg-[#E6D590] rounded-lg">
                <img
                  src={Login}
                  alt="Bulb Image"
                  className="bg-[#21409A] rounded-full px-2 py-2 size-8"
                />
                <p>File a Grievance</p>
              </button>
              <button className="px-16 flex flex-col items-center justify-center gap-2 bg-[#E6D590] rounded-lg">
                <img
                  src={OfficerLogin}
                  alt="Bulb Image"
                  className="bg-[#21409A] rounded-full px-2 py-2 size-8"
                />
                <p>Officer Login</p>
              </button>
            </div>
          </div>
        </section>

        <section className="grid justify-center ">
          <h2 className="flex justify-center my-8 font-bold text-2xl">
            Simple steps to register your complaint
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-center items-center p-6 bg-[#FFF5CE] rounded-lg">
              <div className="bg-white  shadow-md  w-80   px-8 text-center space-y-2 py-10">
                <h3 className="font-bold text-xl text-[#21409A]">Step 1</h3>
                <h1 className="font-semibold text-lg">
                  Login into Helpline portal{" "}
                </h1>
                <p className="text-[#575757] font-normal text-sm">
                  Login into helpline portal using phone number. Enter the OTP
                  to Login.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center p-6 bg-[#FFF5CE] rounded-lg ">
              <div className="bg-white  shadow-md py-10  px-8 w-80  text-center space-y-2">
                <h3 className="font-bold text-xl text-[#21409A]">Step 2</h3>
                <h1 className="font-semibold text-lg">Enter your Grievance</h1>
                <p className="text-[#575757] font-normal text-sm">
                  Click on “File a Grievance describe your grievance and other
                  detail in the form.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-6 bg-[#FFF5CE] rounded-lg ">
              <div className="bg-white  shadow-md py-10 px-8 w-80  text-center space-y-2">
                <h3 className="font-bold text-xl text-[#21409A]">Step 4</h3>
                <h1 className="font-semibold text-lg">Track your Grievance</h1>
                <p className="text-[#575757] font-normal text-sm">
                  You will be send key updates. You may track your grievance
                  yourself from the cm helpline portal
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-6 bg-[#FFF5CE] rounded-lg ">
              <div className="bg-white  shadow-md py-10 px-8 w-80  text-center space-y-2">
                <h3 className="font-bold text-xl text-[#21409A]">Step 3</h3>
                <h1 className="font-semibold text-lg">Submit the form</h1>
                <p className="text-[#575757] font-normal text-sm">
                  Submit the form . You would receive an acknowledgement message
                  with your unique grievance ID.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="">
        <div className="">
          <p>Quick Links</p>
          <nav>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact-us">Contact us</a>
            <a href="/about-us">About us</a>
          </nav>
          <p>All rights reserved © Madurai Smart City 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
