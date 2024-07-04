"use client";
import { MOBILE } from "@/configs/style";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: "100%";
  height: "100%";

  ${MOBILE} {
    padding-inline: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px 30px;
`;

export const Inner = styled.div`
  max-width: 680px;
  width: 100%;
  margin-inline: auto;
  padding-bottom: 50px;
`;

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 20px;
`;
