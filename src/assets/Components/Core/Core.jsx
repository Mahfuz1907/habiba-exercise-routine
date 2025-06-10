import React from "react";
import FooterCr from "../Footer/FooterCr";
import Diff2 from "./Diff2";

const Core = () => {
  return (
    <div>
      <Diff2 />
      <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl font-black text-green-800 text-center">
          Core & Pelvic Stability (Perform Each Exercise for 3 rounds)
        </h1>
        <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Plank Holds (30 sec)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/PWd2VXg2Mpk?si=j9prh6X8OlV8_MRd&amp;start=2"
              title="Plank Holds"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Side Leg raise (12 reps per each leg)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/jgh6sGwtTwk?si=CJ_dQ5Qu6ge2ngyO&amp;start=15"
              title="Side Leg raise"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Kegel Exercise (10 sec hold, repeat 10 times)</h1>
            <p className="text-base text-black font-normal">
              Do contraction like to stop urine and then expansion means
              release.
            </p>
          </li>
        </ol>
        <progress
          className="progress text-green-400 w-full"
          value={60}
          max="100"
        ></progress>
        <FooterCr />
      </div>
    </div>
  );
};

export default Core;
