// import styled from "styled-components";

// const TypeItem = styled.div`
//   margin: 0 2%;
//   cursor: pointer;
//   font-size: 1.5em;
//   font-weight: 600;
// `;

// export default TypeItem;

import React from "react";
import styled from "styled-components";
import colors from "../../config/colors";

const ItemByType = styled.div`
  margin: 0 2%;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 600;
`;

const ItemByTypeActive = styled(ItemByType)`
  color: ${colors.greyDark1};
  border-bottom: 1px solid ${colors.greyDark1};
`;

const TypeItem = ({ isActive, type, onClick }) => {
  return isActive ? (
    <ItemByTypeActive>{type}</ItemByTypeActive>
  ) : (
    <ItemByType onClick={onClick}>{type}</ItemByType>
  );
};

export default TypeItem;
