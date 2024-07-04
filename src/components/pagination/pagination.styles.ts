import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.disabled ? "#ddd" : "salmon")};
  color: ${(props) => (props.disabled ? "#aaa" : "#fff")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ddd" : "#0056b3")};
  }
`;

export const PageNumber = styled.span<{ active?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "salmon")};
`;
