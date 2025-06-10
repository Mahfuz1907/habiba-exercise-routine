import React from "react";
import FooterFlex from "../Footer/FooterFlex";
import Sliding from "./Sliding.jsx";

const Flex = () => {
  return (
    <div>
      <Sliding />
      <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl font-black text-green-800 text-center">
          Flexibility & Pain Reduction (Perform Each Exercise for 3 rounds)
        </h1>
        <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Yoga Stretch Poses (30 sec each)</h1>
            <ul className="flex flex-col justify-center items-center gap-5">
              <li className="flex flex-col justify-center items-center gap-5">
                <h1>Child's Pose</h1>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/_ZX_zTOBgp8?si=gk4FQRtQRi0vegSr"
                  title="Child's Pose"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </li>

              <li className="flex flex-col justify-center items-center gap-5">
                <h1>Cobra Stretch</h1>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/JDcdhTuycOI?si=Cpzi6AWY8hs7GElx"
                  title="Cobra Stretch"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </li>

              <li className="flex flex-col justify-center items-center gap-5">
                <h1>Hip Openers</h1>
                <iframe
                  className="w-full"
                  height="315"
                  src="https://www.youtube.com/embed/W9SaTiFOLEQ?si=7LK9NgYTK1mQE5u3&amp;start=35"
                  title="Hip Openers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </li>
            </ul>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Hip Circle (30 sec per side)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/qkrJXGVj_OQ?si=j-Ru9Ftiw0iHCDHu&amp;start=10"
              title="Hip Circle"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>

          <li className="flex flex-col justify-center items-center gap-5">
            <h1>Cat Cow Pose (12 reps)</h1>
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/LIVJZZyZ2qM?si=hcn-FxRiVopIEyU3"
              title="Cat Cow Pose"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </li>
        </ol>
        <progress
          className="progress text-green-400 w-full"
          value={100}
          max="100"
        ></progress>
        <FooterFlex />
      </div>
    </div>
  );
};

export default Flex;
