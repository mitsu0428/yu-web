import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 32px;
  text-align: left;
  font-weight: 600;
`;

export const H2 = styled.h2`
  font-size: 24px;
  text-align: left;
  font-weight: 600;

  &:after {
    content: "";
    display: block;
    height: 4px;
    background: -webkit-linear-gradient(to right, #ba2636, transparent);
    background: linear-gradient(to right, #ba2636, transparent);
  }
`;

export const H3 = styled.h3`
  font-size: 20px;
  text-align: left;
  font-weight: 600;
`;

export const H4 = styled.h4`
  font-size: 16px;
  text-align: left;
  font-weight: 600;
`;
