import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	navbar: {
		// marginBottom: "1%",
	},
	main: {
		minHeight: "80vh",
	},
	sectionOne: {
		backgroundImage:
			" linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://picsum.photos/1920/1080')",
		minHeight: "70vh",
		minWidth: "100%",
		backgroundPosition: "center",
		backgroundSize: "cover",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	contactUsForm: {
		backgroundColor: "#e3e8e5",
		padding: "5%",
		margin: "3%",
		width: "50%",
	},
	footer: {
		textAlign: "center",
		justifyContent: "center",
		marginTop: "10px",
	},
});

export default useStyles;
