import "./styles.css";

// ルーティングセクション
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerachInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: "はっしー",
  email: "1111@aaa.com",
  phone: "045-xxx-xxx",
  company: {
    name: "〇〇株式会社"
  },
  website: "https://giigle.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SerachInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
