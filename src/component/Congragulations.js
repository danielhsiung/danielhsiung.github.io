// 這邊是中獎後的視覺元件
import React from "react";

import "../style/congragulations.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Congragulations({
  award_name,
  display = false,
  setdisplay
}) {
  return (
    <div
      data-testid="congragulations"
      className="bg"
      style={{
        opacity: display ? "1" : "0",
        pointerEvents: display ? "auto" : "none"
      }}
    >
      <div className="tag">
        <h1>{award_name}</h1>
      </div>
      <FaRegTimesCircle className="axis" onClick={() => setdisplay("")} />
    </div>
  );
}
