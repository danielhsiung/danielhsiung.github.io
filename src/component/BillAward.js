import React from "react";
import { useSelector } from "react-redux";
import "../style/BillAward.css";

export default function Billaward() {
  const blood = useSelector((state) => state.blood);
  return (
    <div>
      <div className="awardwrap">
        <div className="awardrow">
          <div
            className={
              blood.monsternumber >= 1 ? "enabled display1" : "enabled enabled1"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 2 ? "enabled display2" : "enabled enabled2"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 3 ? "enabled display3" : "enabled enabled3"
            }
            data-testid="award"
          ></div>
        </div>
        <div className="awardrow">
          <div
            className={
              blood.monsternumber >= 4 ? "enabled display4" : "enabled enabled4"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 5 ? "enabled display5" : "enabled enabled5"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 6 ? "enabled display6" : "enabled enabled6"
            }
            data-testid="award"
          ></div>
        </div>
        <div className="awardrow">
          <div
            className={
              blood.monsternumber >= 7 ? "enabled display7" : "enabled enabled7"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 8 ? "enabled display8" : "enabled enabled8"
            }
            data-testid="award"
          ></div>
          <div
            className={
              blood.monsternumber >= 9 ? "enabled display9" : "enabled enabled9"
            }
            data-testid="award"
          ></div>
        </div>
      </div>
      <div className="books"></div>
    </div>
  );
}
