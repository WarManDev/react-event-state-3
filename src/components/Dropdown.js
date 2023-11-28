import React, { useState } from "react";
import DropdownList from "./DropdownList";

export default function Dropdown() {
  const [btn, setClicks] = useState("dropdown-wrapper");

  const onSwitch = () => {
    setClicks((prevValue) =>
      prevValue === "dropdown-wrapper"
        ? "dropdown-wrapper open"
        : "dropdown-wrapper"
    );
  };

  return (
    <div className='containier'>
      <div className={btn}>
        <button className='btn' onClick={onSwitch}>
          <h3>Accaount settings</h3>
          <i className='material-icons'>public</i>
        </button>
        <DropdownList className='DropdownList' />
      </div>
    </div>
  );
}
