import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Facebook = (props) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={props.source} style={styles.logo} />
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginLeft: width * 0.04,
		marginRight: width * 0.05,
	},
	logo: {
		width: 5 * (width * 0.02),
		height: 5 * (width * 0.02),
	},
	text: {
		marginLeft: 2 * (width * 0.01),
		color: "gray",
		fontSize: 16,
	},
});

export { Facebook };
