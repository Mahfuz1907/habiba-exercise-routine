import React from "react";
import FooterUp from "../Footer/FooterUp";
import Carousel2 from "./Carousel2";

const Upper = () => {
  return (
    <div>
      <Carousel2 />
      <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl font-black text-green-800 text-center">
          Upper Body & Breast Tightening (Perform Each Exercise for 3 rounds)
        </h1>
        <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Wall Push-ups (15 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/YB0egDzsu18?si=OdR2SxGqxV0jb6Dn&amp;start=25"
              title="Wall Push-ups"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Chest Fly (12 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/UKwkChzThig?si=VFln5lgLvIRWPRN6&amp;start=22"
              title="Chest Fly"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Triceps Dips (12 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/0326dy_-CzM?si=6jbEK6uId2_0id1e&amp;start=30"
              title="Triceps Dips"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>
        </ol>
        <progress
          className="progress text-green-400 w-full"
          value={80}
          max="100"
        ></progress>
        <FooterUp />
      </div>
    </div>
  );
};

export default Upper;
