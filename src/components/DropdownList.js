import React, { useState } from "react";

export default function DropdownList() {
  const dropdownItem = [
    "Profile Information",
    "Change Password",
    "Become Pro",
    "Help",
    "Log Out",
  ];
  const [activeItem, setClicks] = useState(null);

  const onItem = (event) => {
    setClicks(event.target.textContent);
  };

  return (
    <ul className='dropdown'>
      {dropdownItem.map((item) => (
        <li
          key={item}
          className={item === activeItem ? "active" : null}
          onClick={onItem}
        >
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
