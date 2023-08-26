import React from "react";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./profile.css";

const Profile = () => {
  const [bimg, setBimg] = useState("https://picsum.photos/200/300");
  const [pimg, setPimg] = useState("https://picsum.photos/200/300");

  const handlebackground = (e) => {
    setBimg(URL.createObjectURL(e.target.files[0]));
    console.log("B");
  };
  const handleprofile = (e) => {
    setPimg(URL.createObjectURL(e.target.files[0]));
    console.log("P");
  };

  return (
    <>
      <div className=" shadow-lg rounded-lg md:m-20 pb-10">
        <div className=" w-full h-40 relative flex justify-center rounded-lg">
          <div className="flex bg-gray-300 justify-end w-full  h-32 rounded-lg">
            <div className="w-full  relative">
              {bimg ? (
                <img className="h-32 w-full" src={bimg} alt=""></img>
              ) : (
                <img src="" alt=""></img>
              )}
              <div className=" w-[30px] h-[30px] bg-[#E3E9EE] z-10 rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept=".jpg,.jpeg,.png"
                  onChange={handlebackground}
                />
                <label className="cursor-pointer" htmlFor="image">
                  <AiOutlineCamera className="cursor-pointer" />
                </label>
              </div>
            </div>
          </div>
          <div className=" absolute inset-0 flex justify-center items-center  mt-14">
            <div className=" flex justify-center h-32 w-32 bg-white shadow-lg rounded-full">
              <div className="  relative">
                {pimg ? (
                  <img
                    src={pimg}
                    className="h-32 w-32 rounded-full"
                    alt=""
                  ></img>
                ) : (
                  <CgProfile size={130} color="grey" />
                )}
                <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                  <input
                    type="file"
                    id="image1"
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleprofile}
                  />
                  <label className="cursor-pointer" htmlFor="image1">
                    <AiOutlineCamera className="cursor-pointer" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4">
          <center>
            <h2 className="text-3xl font-medium">Abhishek Sharma</h2>
            <h3 className="text-slate-600 font-medium">@abhishek</h3>
          </center>
        </div>

        <div className="mt-3 p-5">
          <div className="text-lg font-medium">
            <div>
              <span>Name →</span>
              <b> Abhishek Sharma</b>
            </div>
            <div>
              <span>Email Address →</span>
              <b> abhishek@gmail.com</b>
            </div>
            <div>
              <span>Email Address →</span>
              <b> abhishek@gmail.com</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
