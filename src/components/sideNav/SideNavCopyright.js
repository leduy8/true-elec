import styled from "styled-components";

const SideNavCopyright = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-dark-2);
  text-align: center;
  padding: 2.5rem;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export default SideNavCopyright;
