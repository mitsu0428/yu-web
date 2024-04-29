import { Link } from "react-router-dom";
import { container } from "../../style/Home.css";

export const Component = () => {
  return (
    <div className={container}>
      <h2>結う -web</h2>

      <Link to="/about">About</Link>
    </div>
  );
};
