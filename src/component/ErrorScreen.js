import React from "react";

export default function ErrorScreen({ error }) {
  return (
    <div
      style={{
        backgroundColor: "#efacac",
        border: "double 4px darked",
        color: "darked",
        padding: "1em"
      }}
    >
      <h3>很抱歉！發生了一些錯誤</h3>
      <p>我們無法回應你的請求</p>
      <p>錯誤訊息：{error.message}</p>
    </div>
  );
}
