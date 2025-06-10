import React from "react";
import D1 from "/diff1.png";
import D2 from "/diff2.png";

const Diff = () => {
  return (
    <div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img alt="daisy" src={D1} />
        </div>
        <div className="diff-item-2" role="img">
          <img alt="daisy" src={D2} />
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
};

export default Diff;
