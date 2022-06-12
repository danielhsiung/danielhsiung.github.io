// 關於 檢定發票正確與否寫在這邊

// FetchBill 函式第一個參數是month接收五個數字，前三是查詢民國年，後二是查詢月分
// example: 10106
// FetchBill 函式第一個參數是inputvalue接收一個字串，是使用者輸入的值

import { bill } from "../data/get_bill";
export default function FetchBill(month, inputvalue) {
  const bill_now = JSON.parse(bill);

  const bill_month = bill_now.filter((el) => el.months === month);

  const special = bill_month[0].specialfull;

  const first = bill_month[0].firstfull;
  const head = bill_month[0].headfull;
  const head_3 = head.map((i) => i.slice(-3));
  const head_4 = head.map((i) => i.slice(-4));
  const head_5 = head.map((i) => i.slice(-5));
  const head_6 = head.map((i) => i.slice(-6));
  const head_7 = head.map((i) => i.slice(-7));

  if (inputvalue === special) {
    return "恭喜獲得特別獎";
  } else if (inputvalue === first) {
    return "恭喜獲得特獎";
  } else if (head.includes(inputvalue)) {
    return "恭喜獲得頭獎";
  } else if (head_7.includes(inputvalue.slice(-7))) {
    return "恭喜獲得二獎";
  } else if (head_6.includes(inputvalue.slice(-6))) {
    return "恭喜獲得三獎";
  } else if (head_5.includes(inputvalue.slice(-5))) {
    return "恭喜獲得四獎";
  } else if (head_4.includes(inputvalue.slice(-4))) {
    return "恭喜獲得五獎";
  } else if (head_3.includes(inputvalue.slice(-3))) {
    return "恭喜獲得六獎";
  } else {
    return false;
  }
}
