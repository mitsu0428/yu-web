import { Link } from "react-router-dom";
import { container } from "../../style/Home.css";

export const Component = () => {
  return (
    <div className={container}>
      <h2>コンセプト</h2>

      <Link to="/">Home</Link>
    </div>
  );
};
