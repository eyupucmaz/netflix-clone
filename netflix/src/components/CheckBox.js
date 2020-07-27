import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";
const { width, height } = Dimensions.get("window");

const CheckBox = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
			<View style={styles.container}>
				<View style={styles.box}>
					{props.status && (
						<Image style={styles.image} source={require("../image/done.png")} />
					)}
				</View>
				<Text style={styles.text}>Remember me</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	box: {
		backgroundColor: "#999",
		width: 2 * (width * 0.02),
		height: 2 * (width * 0.02),
		borderRadius: 3,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		marginLeft: 2 * (width * 0.01),
		color: "gray",
		fontSize: 16,
	},
	image: {
		width: "80%",
		height: "90%",
	},
});

export { CheckBox };
