import React from "react";
import { Camera, Download } from "lucide-react";
import userProfile from '../../User/profile.png';

export default function ProfileHeader() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap justify-between p-0 md:p-12 md:pt-2 font-manrope w-[100%]">
      {/* Left Section - Avatar + Info */}
      <div className="flex items-center md:gap-4 gap-8 w-[100%] mt-20 md:mt-2">
        {/* Avatar */}
        <div className="relative">
          <img
            src={userProfile}
            alt="profile"
            className="h-26 w-36 md:w-24 md:h-24 rounded-full border border-gray-200 object-cover z-1"
          />
          <div className="absolute bottom-0 right-0 bg-white rounded-full m-[-1%] cursor-pointer p-2 z-2">
            <Camera size={20}/>
          </div>
        </div>
        {/* Name + Bio */}
        <div>
          <h2 className="text-[20px] md:text-[22px] font-semibold text-font-color">Aditya Kumar Jha</h2>
          <p className="text-font-color text-[12px] md:text-[14px] font-montserrat">
            Web Developer & UI/UX Designer | Passionate <br /> about building digital experiences
          </p>
        </div>
      </div>
      {/* Right Section - Button */}
      <button className="flex items-center justify-center w-[16rem] flex-nowrap gap-2 px-4 py-2 my-4 bg-secondary-accent shadow-sm text-accent text-[16px] md:text-[18px] font-semibold rounded-[10px]">
        <Download size={20} /> Export as CV
      </button>
    </div>
  );
}
