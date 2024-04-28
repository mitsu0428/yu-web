import {
  BrowserRouter,
  Route,
  Routes,
  type RouteProps,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
] as const satisfies RouteProps[];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route
            key={i}
            path={path}
            element={<Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
