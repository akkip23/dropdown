// useState hook to set dorpdown state
import { useState } from "react";
// css file import
import "./dropdown.css";
// dropdown data import
import { DropdownData } from "./dropDownData";

function Dropdown() {
  //set state to active and inActive to visible dropdown data in hover
  const [isActive, setActive] = useState(false);
  const [option, SelOption] = useState("Select");

  //dropdown Select handler and after selection hide the dropdownData Container
  function DropDownSelHandler(selectedData) {
    SelOption(selectedData);
    setActive(false);
  }

  //on Mouse Hover show dropdown Data
  function onMouseHover() {
    setActive(true);
  }

  //using map funtion map all the the Dropdown Data to dropdown Container
  const results = DropdownData.map((itm) => {
    return (
      <p key={itm.id} onClick={() => DropDownSelHandler(itm.dName)}>
        {itm.dName}
      </p>
    );
  });

  return (
    <>
      {/* dropdown body container */}
      <div className="dropdown-body">
        <h2>Should you use a dropdown ?</h2>
        <div className="dropDown-menu" onMouseOver={onMouseHover}>
          <p>{option}</p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/10412/10412452.png"
            alt="dropDown"
          />
        </div>
        {/* dropdown Data Content */}
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
