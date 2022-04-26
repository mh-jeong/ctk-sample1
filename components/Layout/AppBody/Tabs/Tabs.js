import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IoCloseCircleSharp } from "react-icons/io5";

const Base = styled.div``;

const TabWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 8px 36px;
  background-color: #ebecf0;
`;

const TabItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  min-width: 200px;
  padding: 8px 12px;
  ${({ active }) =>
    active
      ? css`
          border: 1px solid #083a90;
        `
      : css`
          color: #b3bac5;
          border: 1px solid #b3bac5;
        `};
  background-color: #fff;
  border-radius: 4px;
  text-align: left;
  &:hover {
    cursor: pointer;
    color: #202020;
    border: 1px solid #202020;
  }
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

const TabItemText = styled.span``;

const Tabs = () => {
  return (
    <Base>
      <TabWrapper>
        <TabItem active={true}>
          <TabItemText>Dashboard</TabItemText>
          <IoCloseCircleSharp />
        </TabItem>
        <TabItem>
          <TabItemText>Inbound</TabItemText>
          <IoCloseCircleSharp />
        </TabItem>
        <TabItem>
          <TabItemText>Outbound</TabItemText>
          <IoCloseCircleSharp />
        </TabItem>
      </TabWrapper>
    </Base>
  );
};

export default Tabs;
