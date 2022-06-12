import BillInput from "./BillInput";
import Billlist from "./Billlist";
import "../style/billinput.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";
import Billaward from "./BillAward";

export default function App() {
  let navigate = useNavigate();
  return (
    <div className="wrap">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<BillInput />} />
          <Route path="/list" element={<Billlist />} />
          <Route path="/award" element={<Billaward />} />
        </Routes>
      </ErrorBoundary>
      <div
        data-testid="diarybtn"
        onClick={() => navigate("/list")}
        className="diary"
      ></div>
      <div
        data-testid="homebtn"
        onClick={() => navigate("/")}
        className="home"
      ></div>
      <div
        data-testid="Award"
        onClick={() => navigate("/award")}
        className="award"
      ></div>
    </div>
  );
}
