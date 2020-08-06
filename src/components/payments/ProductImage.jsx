import styled from "styled-components";
import colors from "../../config/colors";

const ProductImage = styled.img`
  max-width: 256px;
  max-height: 144px;
  border: 1px solid ${colors.greyLight3};
  background-color: white;
  margin: 0 auto;
  display: block;
`;

export default ProductImage;
