import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/page2/999">URL Paramater</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Paramater</Link>
    </div>
  );
};
