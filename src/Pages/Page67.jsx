import React from "react";
import SideBarCourse from "../Components/SidebarCourses";
// import Navbar from "../Components/Navbar";
// import PageEnd from "../Components/PageEnd";
import EventBanner from "../Components/EventBanner";
import CourseNotes from "../Components/courseNotes";

const Page67 = () => {
  return (
    <>
      <main className="ml-16 my-8 flex h-auto justify-center">
        <div className="hidden md:block w-1/6 h-auto">
          <SideBarCourse />
        </div>
        <div className=" w-full md:w-9/12 mx-0 md:mx-8 h-auto">
          <CourseNotes />
        </div>
      </main>
    </>
  );
};

export default Page67;
