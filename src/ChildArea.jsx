import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChileAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <div>子コンポーネント</div>
        </div>
      ) : null}
    </>
  );
});
