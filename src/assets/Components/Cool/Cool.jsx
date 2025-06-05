import React from "react";
import FooterCool from "../Footer/FooterCool";

const Cool = () => {
  return (
    <div className="my-20 mx-10 flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-black text-green-800 text-center">
        Cool Down
      </h1>
      <ol className="text-xl font-medium text-green-600 text-center flex flex-col justify-center items-center gap-10">
        <li className="flex flex-col justify-center items-center gap-5">
          <h1>Deep Breathing (10 reps)</h1>
          <p className="text-base font-normal text-black">
            Take a deep breath through your nose and keep for 5 seconds, then
            release it slowly through your mouth
          </p>
        </li>
      </ol>

      <FooterCool />
    </div>
  );
};

export default Cool;
