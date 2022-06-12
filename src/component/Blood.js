import "../style/billinput.css";
import React from "react";

// 3. blood 元件吃進數值之後，會套用到 transform scale 上，實現血條縮短
export default function Blood({ blood }) {
  return (
    <div className="blood">
      <div
        data-testid="bloodplay"
        className="blood_play"
        style={{ transform: `scale(${blood},1)` }}
      ></div>
    </div>
  );
}
