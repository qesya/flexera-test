import { MOBILE } from "@/configs/style";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  background-color: white;
  padding: 20px;
  cursor: pointer;

  border: 1px solid rgba(149, 157, 165, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition-duration: 0.1s;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Image = styled.img`
  height: 100px;
  width: 100px;

  ${MOBILE} {
    height: 40px;
    width: 40px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: black;

  span {
    display: block;
  }

  ${MOBILE} {
    justify-content: center;
    span {
      display: none;
    }
  }
`;
