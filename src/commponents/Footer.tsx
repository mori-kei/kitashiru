import React from "react";
import styled from "@emotion/styled";
const FooterComponent = styled.div`
  @media (max-width: 460px) {
    background-color: #212836;
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
  @media (min-width: 460px) {
    background-color: #212836;
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
`;
export const Footer = () => {
  return (
    <FooterComponent>
      <p>© 2022 Kitasiru.</p>
    </FooterComponent>
  );
};
