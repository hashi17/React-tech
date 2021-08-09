import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { Home } from "./components/Home";
import { InlineStyle } from "./components/InlineStyle";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

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
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
