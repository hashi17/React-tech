import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

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
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
