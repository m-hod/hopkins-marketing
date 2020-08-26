import React from "react";
import * as Page from "../../components/Page/Page";
import { useRouter } from "next/router";

function service() {
  const router = useRouter();

  return (
    <Page.Wrapper>
      <Page.Content>hi</Page.Content>
    </Page.Wrapper>
  );
}

export default service;
