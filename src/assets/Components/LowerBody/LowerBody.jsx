import React from "react";
import FooterLB from "../Footer/FooterLB";
import Diff from "./Diff";

const LowerBody = () => {
  return (
    <div>
      <Diff />
      <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl font-black text-green-800 text-center">
          Lower Body Strength (Perform Each Exercise for 3 rounds)
        </h1>
        <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Squats (12 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/xqvCmoLULNY?si=J1vrPXyi1JmPT8Mm&amp;start=18"
              title="Squats"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Glute Bridges (15 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/Xp33YgPZgns?si=z8k5pSP6MRHRuZUD&amp;start=2"
              title="Glute Bridges"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Step-Ups (on a sturdy chair or platform) (12 reps each leg)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/WCFCdxzFBa4?si=sS1L4f_yWSIC6vaA&amp;start=27"
              title="Step-Ups"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Inner Thigh Squeeze (15 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/LV10oi6ruUY?si=COBP0Irlr-IPXpkT&amp;start=30"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>
        </ol>
        <progress
          className="progress text-green-400 w-full"
          value={40}
          max="100"
        ></progress>
        <FooterLB />
      </div>
    </div>
  );
};

export default LowerBody;
