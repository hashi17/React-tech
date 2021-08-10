import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SerachInput = memo(() => {
  console.log("SearchInput");
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrappr>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrappr>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrappr = styled.div`
  padding-left: 8px;
`;
