import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? "0px solid" : "4px solid")};
  border-top-color: rgba: rgba(${props => props.color}, 0.1);
  border-right-color: rgba: rgba(${props => props.color}, 0.1);
  border-bottom-color: rgba: rgba(${props => props.color}, 0.1);
  border-left-color: rgba: rgba(${props => props.color}, 0.1);
`;
