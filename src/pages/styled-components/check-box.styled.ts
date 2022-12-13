import styled from "styled-components";

export const CheckBoxWrap = styled.input.attrs({ type: "checked" })`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 20px;
  ${(props) =>
    props.checked
      ? `background: linear-gradient(
      325deg,
      rgba(192, 88, 243, 1) 0%,
      rgba(87, 221, 255, 1) 100%
    );`
      : "blue"}
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;

export const Icon = styled.img`
  padding: 5px;
`;
