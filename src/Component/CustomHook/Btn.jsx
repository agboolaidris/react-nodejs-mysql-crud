import React from "react";
const STYLE_BTN = ["btn-primary", "btn-secondary"];

export function Btn({ styleBtn, children }) {
  const Style_option = STYLE_BTN.includes(styleBtn) ? styleBtn : STYLE_BTN[0];

  return (
    <div>
      <button className={`btn ${Style_option}`}>HELLO</button>
    </div>
  );
}
