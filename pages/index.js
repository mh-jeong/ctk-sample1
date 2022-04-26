import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useGlobalStore from "../mobx/store";
import { useObserver } from "mobx-react";

import styled from "@emotion/styled";

const Box = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

function HomePage() {
  const router = useRouter();

  const { accountStore } = useGlobalStore();

  return useObserver(() => (
    <>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  ));
}

export default HomePage;
