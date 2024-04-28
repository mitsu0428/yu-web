import { Link } from "react-router-dom";

export const Component = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/about">About</Link>
    </div>
  );
};
