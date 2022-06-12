import React, { useState } from "react";
import "../style/Billtable.css";

export default function Billtable({ bill }) {
  const [month, setMonth] = useState("11011");
  var target_month = bill.filter((bill) => bill.months === month);
  return (
    <div data-testid="table">
      <div className="btngroup">
        <div className="monthbtn first" onClick={() => setMonth("11011")}>
          110 11-12 月
        </div>
        <div
          data-testid="11101"
          className="monthbtn second"
          onClick={() => setMonth("11101")}
        >
          111 1-2 月
        </div>
        <div className="monthbtn third" onClick={() => setMonth("11103")}>
          111 3-4 月
        </div>
      </div>
      <div className="tablewrapper">
        <table data-testid="billlist" className="table">
          <thead>
            <tr>
              <th> 兌獎月份 </th>
              <th> 發票號碼 </th>
              <th> 兌獎時間 </th>
              <th className="right_column"> 中獎 </th>
            </tr>
          </thead>
          <tbody>
            {target_month.map((li) => (
              <tr key={li.id}>
                <th data-testid="months">{li.months}</th>
                <th>{li.bill_num}</th>
                <th>{li.date.split("T")[0]}</th>
                <th>{li.win ? "V" : "X"}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="books"></div>
    </div>
  );
}
