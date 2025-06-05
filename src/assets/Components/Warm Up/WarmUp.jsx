import React from "react";
import FooterWP from "../Footer/FooterWP";

const WarmUp = () => {
  return (
    <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-black text-green-800">Warm Up</h1>
      <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Arm Circles (30 sec per each direction)</h1>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/UVMEnIaY8aU?si=Lqu-AzTBbkxs5wb5&amp;start=7"
            title="Arm Circles"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </li>

        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Neck and Shoulder Roll (30 sec per each side)</h1>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/JpaYwJLzElM?si=wXV4IxvEv0MXATka&amp;start=14"
            title="Neck and Shoulder Roll"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </li>

        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Dynamic Hip Opener (10 reps per each leg)</h1>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/Itd-QTA7Jno?si=ld6DFLj5as2NWVQh"
            title="Dynamic Hip Opener"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </li>

        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Body weight Squats (15 reps)</h1>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/xqvCmoLULNY?si=J1vrPXyi1JmPT8Mm&amp;start=18"
            title="Body weight Squats"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </li>

        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Cat-Cow Stretch (12 reps)</h1>
          <iframe
            className="w-full"
            height="315"
            src="https://www.youtube.com/embed/LIVJZZyZ2qM?si=hcn-FxRiVopIEyU3"
            title="Cat-Cow Stretch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </li>
      </ol>

      <FooterWP />
    </div>
  );
};

export default WarmUp;
