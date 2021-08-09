import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

// ルーティングセクション
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  console.log("App");
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
