import styled from "@emotion/styled";

import SideMenu from "./ContentSideMenu";
import Tabs from "./Tabs";
import ContentHeader from "./ContentHeader";
import ContentSideMenu from "./ContentSideMenu";

const Base = styled.main``;

const ContentContainer = styled.div`
  display: flex;
  background-color: #f4f5f7;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 24px;
  overflow: auto;
`;

const ContentBody = styled.div`
  overflow: auto;
`;

const AppBody = ({ children }) => {
  return (
    <Base>
      <ContentContainer>
        <ContentSideMenu />
        <ContentWrapper>
          <ContentHeader />
          <ContentBody>{children}</ContentBody>
        </ContentWrapper>
      </ContentContainer>
    </Base>
  );
};

export default AppBody;
