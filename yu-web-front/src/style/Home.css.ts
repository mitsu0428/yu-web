import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100%",
	padding: "20px",
});

export const subTitle = style({
	fontSize: "1.5rem",

	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.2rem",
		},
	},
});

export const text = style({
	fontSize: "1.2rem",
	margin: "20px 0",

	"@media": {
		"(max-width: 768px)": {
			fontSize: "1rem",
		},
	},
});
