import React from "react";
import undrawSchedule from "../images/page69/undraw-schedule.png";
import "../CSS/courseNotes.css";
import lineleft from "../images/page69/lineleft.svg";
import lineright from "../images/page69/lineright.svg";
import event1 from "../images/page69/event1.png";
import event2 from "../images/page69/event2.png";
import event3 from "../images/page69/event3.png";
import event4 from "../images/page69/event4.png";
import { useState } from "react";

function CourseNotes() {
  const lesson = [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3",
    "Lesson 4",
    "Lesson 5",
    "Lesson 6",
    "Lesson 7",
    "Lesson 8",
  ];
  const [lessonNo, setLessonNo] = useState(0);
  const lecture = [
    {
      name: "Lecture -1",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -2",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -3",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -4",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -5",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -6",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -7",
      content: "What is Graphic Designing ???",
    },
    {
      name: "Lecture -8",
      content: "What is Graphic Designing ???",
    },
  ];

  return (
    <>
      <div className="w-[100%] banner md:w-[1042px] h-[202px] box-border ml-0 md:ml-[35px] gradient relative ">
        <span className="eventFont mt-[48px] ml-[44px] absolute">
          Course Notes
        </span>
        <span className=" EventSubtitle mt-[115px] ml-[44px] absolute">
          Download notes for your course related !!!!!
        </span>
        <img
          src={undrawSchedule}
          width={156}
          height={188}
          className="image hidden md:block absolute mt-[50px] ml-[80%] mr-[87px]"
        ></img>
      </div>

      <div class="container ml-5 pl-5 pr-5">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {lesson.map((l, i) => (
              <div className="cursor-pointer me-4 mt-2 mb-2">
                <b>
                  <p class="h5">
                    {lessonNo === i ? (
                      <li class="nav-link px-2 border-bottom border-success border-3 fw-bold text-success">
                        {l}
                      </li>
                    ) : (
                      <li
                        class="nav-link px-2 text-secondary"
                        onClick={() => setLessonNo(i)}
                      >
                        {l}
                      </li>
                    )}
                  </p>
                </b>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3">
        {lecture.map((lect) => (
          <div className="lessonContainer">
            <div className="lectureNo">{lect.name}</div>
            <div className="lessonContainer">
              <div className="lessonInfo">
                {lect.content}
                <div className="downloadButton">
                  <button className="button">Download Notes</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="viewMore">View more</button>
      </div>
    </>
  );
}

export default CourseNotes;
