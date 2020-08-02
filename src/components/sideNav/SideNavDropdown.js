import React from "react";

import SideNavDropdownCheckbox from "./SideNavDropdownCheckbox";
import SideNavDropdownButton from "./SideNavDropdownButton";

const SideNavDropdown = ({ renderTitle, renderSubNav }) => {
  return (
    <>
      <SideNavDropdownButton htmlFor="checkbox">
        {renderTitle()}
      </SideNavDropdownButton>
      <SideNavDropdownCheckbox type="checkbox" id="checkbox" />
      {renderSubNav()}
    </>
  );
};

export default SideNavDropdown;
