import styled from "@emotion/styled";

import { IoPeopleSharp } from "react-icons/io5";
import { ImTruck } from "react-icons/im";
import { FaBoxes } from "react-icons/fa";

const Base = styled.aside`
  min-width: 136px;
  padding: 12px;
  box-shadow: rgb(235 236 240) 2px 0px 0px;
`;

const SideMenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-size: 12px;
  min-height: 136px;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-top: 12px;
  }
  &:hover {
    box-shadow: rgb(235 236 240) 2px 0px 0px;
  }
  &:active {
    box-shadow: unset;
  }
`;

const SideMenuItemText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  word-break: keep-all;
  text-align: center;
`;

const ContentSideMenu = () => {
  return (
    <Base>
      <SideMenuItemWrapper>
        <SideMenuItem>
          <IoPeopleSharp size={32} />
          <SideMenuItemText>Change Management</SideMenuItemText>
        </SideMenuItem>
        <SideMenuItem>
          <ImTruck size={32} />
          <SideMenuItemText>Tracking Shipment</SideMenuItemText>
        </SideMenuItem>
        <SideMenuItem>
          <FaBoxes size={32} />
          <SideMenuItemText>Stock</SideMenuItemText>
        </SideMenuItem>
      </SideMenuItemWrapper>
    </Base>
  );
};

export default ContentSideMenu;
