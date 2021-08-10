import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SerachInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `はっしー${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1111@aaa.com",
    phone: "045-xxx-xxx",
    company: {
      name: "〇〇株式会社"
    },
    website: "https://giigle.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SerachInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmaX(200px, 1fr));
  grid-gap: 20px;
`;
