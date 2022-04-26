import { useCallback, useRef } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { useRouter } from "next/router";

import styled from "@emotion/styled";

import useGlobalState from "../../mobx/store";

const Base = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100vh;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 552px;
  height: 620px;
  background-color: #fff;
  border-radius: 8px;
`;

const LoginInId = styled.input`
  display: block;
`;

const LoginPassword = styled.input`
  display: block;
`;

const LoginButton = styled.button``;

const LoginPage = () => {
  const router = useRouter();

  const { accountStore } = useGlobalState();

  const state = useLocalStore(() => ({
    loginId: null,
    password: null,
    onChangeLoginId(e) {
      this.loginId = e.target.value;
    },
    onChangePassword(e) {
      this.password = e.target.value;
    },
  }));

  const loginHandler = useCallback(() => {
    accountStore.LOG_IN({
      id: state.loginId,
      password: state.password,
    });
    router.push("/");
  }, []);

  return useObserver(() => (
    <Base>
      <h1>{accountStore.state.accountId}</h1>
      <h1>{accountStore.state.authCd}</h1>
      <LoginFormWrapper>
        <LoginInId
          placeholder="id"
          onChange={state.onChangeLoginId}
        />
        <LoginPassword
          type="password"
          placeholder="password"
          onChange={state.onChangePassword}
        />
        <LoginButton onClick={loginHandler}>로그인</LoginButton>
      </LoginFormWrapper>
    </Base>
  ));
};

export default LoginPage;
