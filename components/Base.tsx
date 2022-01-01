import React from "react";
import { Button, CssBaseline } from "@mui/material";
import Layout from "../components/Layout";
import { MetaD } from "./MetaD";
import { AppConfig } from "../utils/AppConfig";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../utils/theme";
import Navbar from "./Navbar";
import ContactUsSection from "./ContactUsSection";

function Base() {
	return (
		<Layout title="Home">
			<ContactUsSection />
		</Layout>
	);
}

export { Base };
