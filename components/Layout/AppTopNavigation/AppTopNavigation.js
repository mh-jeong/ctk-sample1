import styled from "@emotion/styled";

const Base = styled.nav`
  //margin-top: 88px;
  background-color: #083a90;
  //background-color: #1a38d8;
  padding: 0 12px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
  position: relative;
`;

const NavigationItemWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavigationItem = styled.li`
  min-width: 200px;
  padding-top: 21px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 16px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const AppTopNavigation = () => {
  return (
    <Base>
      <NavigationItemWrapper>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Inbound</NavigationItem>
        <NavigationItem>Outbound</NavigationItem>
        <NavigationItem>Inventory</NavigationItem>
        <NavigationItem>Master Data</NavigationItem>
        <NavigationItem>Location</NavigationItem>
      </NavigationItemWrapper>
    </Base>
  );
};

export default AppTopNavigation;
