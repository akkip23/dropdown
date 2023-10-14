import { useState } from "react";
import "./dropdown.css";
import { DropdownData } from "./dropDownData";

function Dropdown() {
  const [isActive, setActive] = useState(false);
  const [option, SelOption] = useState("Select");

  function DropDownSelHandler(selectedData) {
    SelOption(selectedData);
    setActive(false);
  }

  function onMouseHover() {
    setActive(true);
  }

  const results = DropdownData.map((itm) => {
    return (
      <p key={itm.id} onClick={() => DropDownSelHandler(itm.dName)}>
        {itm.dName}
      </p>
    );
  });

  return (
    <>
      <div className="dropdown-body">
        <h2>Should you use a dropdown ?</h2>
        <div className="dropDown-menu" onMouseOver={onMouseHover}>
          <p>{option}</p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/10412/10412452.png"
            alt="dropDown"
          />
        </div>
        <div
          className="dropDown-content"
          style={{ display: `${isActive ? "block" : "none"}` }}
        >
          {results}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
