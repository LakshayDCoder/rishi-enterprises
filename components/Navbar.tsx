import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useStyles from "../utils/styles";
import { AppConfig } from "../utils/AppConfig";
import NextLink from "next/link";

function Navbar() {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navbar}>
			<Toolbar>
				<Typography variant="h1" component="h1" sx={{ flexGrow: 1 }}>
					{AppConfig.site_name}
				</Typography>
				<Button color="inherit">
					<NextLink href="/">About Us</NextLink>
				</Button>
				<Button color="inherit">
					<NextLink href="/">Our Products</NextLink>
				</Button>
				<Button color="inherit">
					<NextLink href="/">Admin Login</NextLink>
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
