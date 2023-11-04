import { styled } from "styled-components";

export const StInput = styled.input`
  border: none;
  outline: gray solid 1px;
  border-radius: 1rem;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding-left: 1.1rem;
  font-size: 15px;
  margin-top: 10px;
  &:hover {
    border-color: #0047ff;
  }
  &:focus {
    border: 2px solid #0047ff;
  }
`;

export const StInputLink = styled.input`
  border: none;
  outline: gray solid 1px;
  border-radius: 1rem;
  width: 90%;
  height: 60px;
  padding-left: 1.1rem;
  font-size: 15px;
  box-sizing: border-box;
  margin-top: 10px;
  &:hover {
    border-color: #0047ff;
  }
  &:focus {
    border: 2px solid #0047ff;
  }
`;

export const StInputMember = styled.input`
  border: none;
  font-size: 15px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  outline: none;
  &:hover {
    border-color: #0047ff;
  }
  &:focus {
    border: none;
  }
`;
