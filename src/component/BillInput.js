import React, { useEffect } from "react";
// 關於使用者發票輸入的判定寫在這裡

// FetchBill 是 使用者是否有中獎的判斷
// 會回傳 Dict

//import FetchBill from "../function/FetchBill";

// BillOnSubmit 是當使用者送出資料後，會執行的函式

import { useState } from "react";
import { useInput } from "../function/useInput";
import FetchBill from "../function/CheckBill";
import Congragulations from "./Congragulations";
import "../style/billinput.css";
import { addedBill } from "../redux/monster";
import { useDispatch, useSelector } from "react-redux";
import Blood from "./Blood";
import { backtonormal, bloodupdated, retrieved, todead } from "../redux/blood";
import Monsterimg from "./monsterimg";

export default function BillInput() {
  const dispatch = useDispatch();
  const [addedBillnum, resetBillnum] = useInput("");
  const [addedBillmonth, resetBillmonth] = useInput(11011);

  const [result, setResult] = useState("");

  // 1. 存取血量更新資料的 hook，預設是1
  const blood = useSelector((state) => state.blood);

  const [addedBillStatus, setAddedBillStatus] = useState("idle");

  const cansave =
    [addedBillmonth, addedBillnum].every(Boolean) &&
    addedBillStatus === "idle" &&
    addedBillnum.value.length === 8;

  const submit = (e) => {
    e.preventDefault();

    setResult(
      FetchBill(parseInt(addedBillmonth.value, 10), addedBillnum.value)
    );

    if (!cansave) {
      alert("請輸入正確的資訊");
    } else {
      setAddedBillStatus("pending");
    }
  };
  
  useEffect(() => {
     
    if (addedBillStatus !== "idle") {
      try {
        dispatch(
          addedBill({
            months: addedBillmonth.value,
            bill_num: addedBillnum.value,
            win: Boolean(result)
          })
        ).unwrap();
      } catch (err) {
        console.error("failed to save the bill", err);
      } finally {
        resetBillnum("");
        resetBillmonth(addedBillmonth.value);
        if (result === false) {
          dispatch(bloodupdated());
          setTimeout(() => dispatch(backtonormal()), 1000);
          console.log(blood.blood);
        }
        if (blood.blood < 0.2) {
          console.log("hihihi");
          dispatch(todead());
          setTimeout(() => dispatch(retrieved()), 1000);
        }
        setAddedBillStatus("idle");
      }
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedBillStatus]);

  return (
    <div data-testid="billinput">
      <Congragulations
        award_name={result}
        display={result}
        setdisplay={() => setResult()}
      />
      <div className="main">
        {/* 2. 這邊是一個 bllod 元件，會把上面的 blood useState hook 值傳進去 */}
        <Blood blood={blood.blood} />
        <Monsterimg status={blood.monterstatus} />
        <form className="form" onSubmit={submit}>
          <div className="inputarea">
            <select
              className="select"
              name="cars"
              id="cars"
              {...addedBillmonth}
            >
              <option value="11011">110 年 11 - 12 月</option>
              <option value="11101">111 年 1 - 2 月</option>
              <option value="11103">111 年 3 - 4 月</option>
            </select>
            <input
              className="inputbox"
              {...addedBillnum}
              type="number"
              placeholder="請輸入發票全8碼..."
              required
            />
          </div>
          <button>兌獎</button>
        </form>
      </div>
    </div>
  );
}
