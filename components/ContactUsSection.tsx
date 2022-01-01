import {
	Container,
	Grid,
	Box,
	Typography,
	List,
	ListItem,
	TextField,
	Button,
} from "@mui/material";
import React from "react";
import useStyles from "../utils/styles";

function ContactUsSection() {
	const classes = useStyles();
	return (
		<Box className={classes.sectionOne}>
			<form className={classes.contactUsForm}>
				<Typography variant="h3">Contact Us</Typography>
				<List>
					<ListItem>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									required
									variant="outlined"
									fullWidth
									id="name"
									label="Name"
									type="name"
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									required
									variant="outlined"
									fullWidth
									id="email"
									label="Email"
									type="email"
								/>
							</Grid>
						</Grid>
					</ListItem>
					<ListItem>
						<TextField
							variant="outlined"
							fullWidth
							id="subject"
							label="Subject"
							type="text"
						/>
					</ListItem>
					<ListItem>
						<TextField
							variant="outlined"
							fullWidth
							id="message"
							label="Message"
							multiline
							rows={5}
						/>
					</ListItem>
					<ListItem>
						<Button color="primary" variant="contained" fullWidth type="submit">
							Submit
						</Button>
					</ListItem>
				</List>
			</form>
		</Box>
	);
}

export default ContactUsSection;
