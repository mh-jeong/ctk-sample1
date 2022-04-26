import styled from "@emotion/styled";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";

const Base = styled.header`
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  transition: 0.25s;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div``;

const LogoWrapper = styled.div``;

const IconWrapper = styled.div`
  margin-right: 24px;
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #083a90;
`;

const AccountInfoContainer = styled.div`
  display: flex;
  border-left: 1px solid #202020;
  padding-left: 24px;
`;

const AccountImage = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ebecf0;
  border-radius: 50%;
`;

const AccountInfoWrapper = styled.div`
  padding-left: 12px;
`;

const AccountName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const AuthName = styled.div`
  font-size: 13px;
`;

const AppHeader = () => {
  return (
    <Base>
      <Container>
        <Item>
          <LogoWrapper>
            <Logo>COLO</Logo>
          </LogoWrapper>
        </Item>
        <Wrapper>
          <Item>
            <IconWrapper>
              <IoSettingsOutline size={24} />
            </IconWrapper>
          </Item>
          <Item>
            <IconWrapper>
              <IoNotificationsOutline size={24} />
            </IconWrapper>
          </Item>
          <Item>
            <AccountInfoContainer>
              <AccountImage />
              <AccountInfoWrapper>
                <AccountName>Robert Williams</AccountName>
                <AuthName>Marketing Manager</AuthName>
              </AccountInfoWrapper>
            </AccountInfoContainer>
          </Item>
        </Wrapper>
      </Container>
    </Base>
  );
};

export default AppHeader;
