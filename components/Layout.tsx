import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Link,
	CssBaseline,
	Switch,
	Badge,
	Grid,
} from "@mui/material";
import Image from "next/image";
import { MetaD } from "./MetaD";
import { AppConfig } from "../utils/AppConfig";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
	addBrands,
	addProducts,
	addShops,
	addMyPriceCollection,
} from "../firebase/addDummyData";

interface MyProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
}

function Layout({ children, title, description }: MyProps) {
	const classes = useStyles();

	useEffect(() => {
		// addBrands();
		// addProducts();
		// addShops();
		// addMyPriceCollection();
	}, []);

	return (
		<div>
			<MetaD
				title={
					title ? title + " - " + AppConfig.site_name : AppConfig.site_name
				}
				description={description ?? AppConfig.description}
			/>

			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<div className={classes.main}>{children}</div>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default Layout;
