import { useMemo } from "react";
import "./styles.css";

// ルーティングセクション
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  console.log("App");
  // 変数のメモ化。複雑な計算を何度もやりたくない場合
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
