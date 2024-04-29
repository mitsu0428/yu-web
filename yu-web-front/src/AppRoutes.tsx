import {
	BrowserRouter,
	Route,
	Routes,
	type RouteProps,
} from "react-router-dom";
import * as Home from "./components/Home";
import * as About from "./components/About";

const routes = [
	{
		path: "/",
		Component: Home.Component,
	},
	{
		path: "/about",
		Component: About.Component,
	},
] as const satisfies RouteProps[];

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, Component }, i) => (
					<Route key={i} path={path} element={<Component />} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
