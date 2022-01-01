import { Toolbar } from "@mui/material";
import React from "react";
import useStyles from "../utils/styles";

function Footer() {
	const classes = useStyles();

	return <Toolbar className={classes.footer}>All Rights reserved</Toolbar>;
}

export default Footer;
