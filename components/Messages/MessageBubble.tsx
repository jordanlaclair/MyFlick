import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View, Text } from "../Themed";
import Colors, { themeColor } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface props {
	received: boolean;
	sent: boolean;
	textInput: string;
	timeStamp: string;
}

const MessageBubble = ({ received, sent, textInput, timeStamp }: props) => {
	const renderReceivedMessage = () => {
		return (
			<View style={styles.messageContainer}>
				<View style={styles.messageBubbleRow}>
					<Image
						style={styles.profile}
						source={{
							uri: "https://i.pinimg.com/originals/9b/65/89/9b6589897ea022400280d26dcfd3efce.jpg",
						}}
					/>
					<View style={styles.messageBubbleContainer}>
						<View style={styles.messageBubble}>
							<Text style={styles.messageText}>{textInput}</Text>
						</View>
						<Text style={styles.receivedTime}>{timeStamp}</Text>
					</View>
				</View>
			</View>
		);
	};

	const renderSentMessage = () => {
		return (
			<View style={styles.messageContainer}>
				<View>
					<View style={styles.messageSentBubble}>
						<Text style={styles.messageText}>{textInput}</Text>
					</View>
					<View style={styles.messageInfo}>
						<Ionicons
							name="checkmark-done-outline"
							color={"white"}
							size={15}
							style={{ paddingRight: 3 }}
						/>
						<Text style={styles.receivedTime}>{timeStamp}</Text>
					</View>
				</View>
			</View>
		);
	};

	return (
		<View>{received ? renderReceivedMessage() : renderSentMessage()}</View>
	);
};

export default MessageBubble;

const styles = StyleSheet.create({
	profile: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 10,
	},
	messageBubbleRow: {
		flexDirection: "row",
	},
	messageText: {
		color: "white",

		fontSize: 17,
	},
	messageBubble: {
		backgroundColor: themeColor,
		padding: 11,
		borderRadius: 15,
		borderBottomLeftRadius: 0,
		alignContent: "center",
		alignItems: "center",
		alignSelf: "center",
		maxWidth: 290,
	},
	messageSentBubble: {
		backgroundColor: "#B6B6B6",
		padding: 11,
		borderRadius: 15,
		borderBottomRightRadius: 0,
		alignContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		maxWidth: 300,
	},
	messageContainer: {
		flexDirection: "column",
		flex: 0,
		paddingHorizontal: 10,
		paddingTop: 10,
	},

	receivedTime: {
		alignSelf: "flex-end",
		fontSize: 10,
		color: "#B6B6B6",
	},
	fairSpacing: {
		padding: 10,
	},
	messageBubbleContainer: {},
	messageInfo: {
		paddingTop: 3,
		flexDirection: "row",
		alignSelf: "flex-end",
	},
});