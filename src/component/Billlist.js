import Billtable from "./Billtable";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllBill,
  getBillStatus,
  getBillError,
  fetchBill
} from "../redux/monster";
import React from "react";

export default function Billlist() {
  const dispatch = useDispatch();

  const Bill = useSelector(selectAllBill);
  const BillStatus = useSelector(getBillStatus);
  const BillError = useSelector(getBillError);

  useEffect(() => {
    if (BillStatus === "idle") {
      dispatch(fetchBill());
    }
  }, [BillStatus, dispatch]);

  if (BillStatus === "loading") {
    return <p data-testid="billlist">Loading@</p>;
  } else if (BillStatus === "succeeded") {
    return <Billtable bill={Bill.slice()} />;
  } else if (BillStatus === "failed") {
    return <p data-testid="billlist">{BillError}</p>;
  }
}
